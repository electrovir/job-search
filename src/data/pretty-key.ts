import {camelCaseToKebabCase} from '@augment-vir/common';

export function makeKeyPretty(key: string) {
    return camelCaseToKebabCase(key).replaceAll('-', ' ');
}
