import Lib from "../typings/lib";
import PATH from "path";

const template_replacer: Lib.TemplateReplacer = (templated_string) => {
    const cache = {
        watcher: {
            accessor: {
                isWatching: false,
                container: [],
            },
            value: {
                isWatching: false,
                container: [],
            },
            parentheses: 0,
            startIndex: 0,
            isEscaped: false,
        },
        finishedEscapes: [],
    };

    const chars = templated_string.split("");

    for (let i = 0; i < chars.length; i++) {
        const current_char = chars[i];
        const is_not_watching =
            !cache.watcher.accessor.isWatching && !cache.watcher.value.isWatching;

        if (current_char.match(/\\/) && is_not_watching) {
            cache.watcher.isEscaped = !cache.watcher.isEscaped;
            continue;
        }

        if (current_char.match(/\$/) && is_not_watching) {
            cache.watcher.accessor.isWatching = true;
            cache.watcher.startIndex = i;
            continue;
        }

        if (current_char.match(/{/)) {
            cache.watcher.parentheses++;

            if (cache.watcher.accessor.isWatching && !cache.watcher.value.isWatching) {
                cache.watcher.accessor.isWatching = false;
                cache.watcher.value.isWatching = true;
            }
            if (!(cache.watcher.parentheses - 1)) {
                continue;
            }
        }

        if (current_char.match(/}/)) {
            cache.watcher.parentheses--;

            if (cache.watcher.parentheses < 0) {
                throw new Error(`Unexpected curly brace at '${i}' in '${templated_string}'.`);
            }

            if (cache.watcher.parentheses === 0) {
                if (!cache.watcher.isEscaped) {
                    const accessor = cache.watcher.accessor.container.join("");
                    const value = cache.watcher.value.container.join("");
                    const pos = [cache.watcher.startIndex, i];

                    cache.finishedEscapes.push({
                        accessor,
                        value,
                        pos,
                    });
                }

                cache.watcher.value.isWatching = null;
                cache.watcher.startIndex = null;
                cache.watcher.accessor.container = [];
                cache.watcher.value.container = [];
            }
        }

        if (cache.watcher.accessor.isWatching) {
            cache.watcher.accessor.container.push(current_char);
            continue;
        }

        if (cache.watcher.value.isWatching) {
            cache.watcher.value.container.push(current_char);
            continue;
        }
    }

    return cache.finishedEscapes;
};

const accessor_value_handler: Lib.AccessorValueHandler = (escape) => {
    switch (escape.accessor) {
        case "":
            return eval(escape.value)();
        case "regex":
            return RegExp(escape.value);
        case "abspath":
            return PATH.resolve(__dirname, escape.value);
        default:
            throw new Error(`'${escape.accessor}' is not a valid accessor.`);
    }
};

const transpiler: Lib.Transpiler = (subject) => {
    switch (typeof subject) {
        case "object": {
            for (const i in subject) {
                subject[i] = transpiler(subject[i]);
            }
            break;
        }
        case "string": {
            const escapes = template_replacer(subject);
            const is_single =
                escapes.length && escapes[0].pos[0] + escapes[0].pos[1] === subject.length - 1;
            const is_multiple = escapes.length > 1;

            if (is_single) {
                return accessor_value_handler(escapes[0]);
            } else if (is_multiple) {
                const chars = subject.split("");

                let new_subject = "";
                for (let i = 0; i < chars.length; i++) {
                    if (escapes.length && escapes[0].pos[0] === 1) {
                        new_subject += accessor_value_handler(escapes[0]).toString();
                        i += escapes[0].pos[1] - escapes[0].pos[0];
                        escapes.shift();
                        continue;
                    }

                    new_subject += chars[i];
                }

                return new_subject;
            }
            break;
        }
    }

    return subject;
};

export default transpiler;
