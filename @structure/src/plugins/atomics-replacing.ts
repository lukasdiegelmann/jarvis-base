import path from "path";
import { AtomicsData } from "../utils/typings/lib";

const getAtomicsData = (newlyValue: string): AtomicsData[] => {
    const value = JSON.parse(JSON.stringify(newlyValue));

    const atomicsData = [];
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

                    atomicsData.push({ key, value, pos });
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
                throw {
                    name: "AtomicsParsingError",
                    message: `Unexpected curly brace at '${i}' in ${value}.`,
                };
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

    return atomicsData;
};

const useAtomicsData = (atomicsData: AtomicsData): unknown => {
    if (atomicsData.key.match(/^.{0}$/)) {
        return eval(atomicsData.value)();
    }
    if (atomicsData.key.match(/^regexp?$/)) {
        return new RegExp(atomicsData.value);
    }
    if (atomicsData.key.match(/^abspath$/)) {
        return path.resolve(process.cwd(), atomicsData.value);
    }

    throw {
        name: "AtomicsParsingError",
        message: `'${atomicsData.key}' is not a valid atomics key.`,
    };
};

const replaceAtomics = <T>(structure: unknown): T => {
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

    return structure as never;
};

export default replaceAtomics;
