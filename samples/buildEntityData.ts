


export function buildEntity (
    {firstName, lastName}:any, ...address:any[]) {
    return `${firstName} ${lastName} ${address}`;
}


