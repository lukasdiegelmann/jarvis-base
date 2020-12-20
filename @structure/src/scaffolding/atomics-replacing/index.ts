import path from "path";
import { GetAtomicsData, ReplaceAtomics, UseAtomicsData } from "./types";

const getAtomicsData: GetAtomicsData = (value) => {
    const atomicData = [];
    let watchInfo = {
        metaInfo: { openCurlyBraces: 0, startIndex: 0, isEscaped: false },
        key: {
            isWatching: false,
            container: [],
        },
        value: {
            isWatching: false,
            container: [],
        },
    };

    // @ts-expect-error
    for (const i in value) {
        const char = value[i];
        const isNotWatching = !watchInfo.key.isWatching && !watchInfo.value.isWatching;

        if (char.match(/\\/) && isNotWatching) {
            watchInfo.metaInfo.isEscaped = !watchInfo.metaInfo.isEscaped;
            continue;
        }

        if (char.match(/\$/) && isNotWatching) {
            watchInfo.key.isWatching = true;
            watchInfo.metaInfo.startIndex = parseInt(i);
            continue;
        }

        if (char.match(/{/)) {
            watchInfo.metaInfo.openCurlyBraces++;

            if (watchInfo.key.isWatching && !watchInfo.value.isWatching) {
                watchInfo.key.isWatching = false;
                watchInfo.value.isWatching = true;
            }

            if (!(watchInfo.metaInfo.openCurlyBraces - 1)) {
                continue;
            }
        }

        if (char.match(/}/)) {
            watchInfo.metaInfo.openCurlyBraces--;

            if (!watchInfo.metaInfo.openCurlyBraces) {
                if (!watchInfo.metaInfo.isEscaped) {
                    const key = watchInfo.key.container.join("");
                    const value = watchInfo.value.container.join("");
                    const pos = [watchInfo.metaInfo.startIndex, parseInt(i)];

                    atomicData.push({ key, value, pos });
                }

                watchInfo = {
                    metaInfo: { openCurlyBraces: 0, startIndex: 0, isEscaped: false },
                    key: {
                        isWatching: false,
                        container: [],
                    },
                    value: {
                        isWatching: false,
                        container: [],
                    },
                };
            }

            if (watchInfo.metaInfo.openCurlyBraces < 0) {
                throw new Error(`Unexpected curly brace at '${i}' in ${value}`);
            }
        }

        if (watchInfo.key.isWatching) {
            watchInfo.key.container.push(char);
            continue;
        }

        if (watchInfo.value.isWatching) {
            watchInfo.value.container.push(char);
            continue;
        }
    }

    return atomicData;
};

const useAtomicsData: UseAtomicsData = (atomicData) => {
    if (atomicData.key.match(/^.{0}$/)) {
        return eval(atomicData.value)();
    }
    if (atomicData.key.match(/^regexp?$/)) {
        return new RegExp(atomicData.value);
    }
    if (atomicData.key.match(/^abspath$/)) {
        return path.resolve(process.cwd(), atomicData.value);
    }

    throw new Error(`'${atomicData.key}' is not a valid atomic key.`);
};

const replaceAtomics: ReplaceAtomics = (structure) => {
    switch (typeof structure) {
        case "object":
            for (const i in structure) {
                structure[i] = replaceAtomics(structure[i]);
            }

            break;
        case "string": {
            const atomicData = getAtomicsData(structure);

            if (atomicData.length) {
                if (atomicData[0].pos[0] + atomicData[0].pos[1] === structure.length - 1) {
                    structure = useAtomicsData(atomicData[0]);
                } else {
                    const chars = structure.split("");
                    let newValue = "";

                    for (let i = 0; i < chars.length; i++) {
                        if (atomicData.length) {
                            if (atomicData[0].pos[0] === i) {
                                newValue += useAtomicsData(atomicData[0]);
                                i += atomicData[0].pos[1] - atomicData[0].pos[0];
                                atomicData.shift();

                                continue;
                            }

                            newValue += chars[i];
                        }
                    }

                    structure = newValue;
                }
            }

            break;
        }
    }

    return structure as any;
};

export default replaceAtomics;
