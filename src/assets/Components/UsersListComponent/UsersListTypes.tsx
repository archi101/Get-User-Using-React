export interface Name {
    title: string;
    first: string;
    last: string;
};
export interface Login{
    md5: string;
    password: string;
    salt: string;
    sha1: string;
    sha256: string;
    username: string;
    uuid: string;
}