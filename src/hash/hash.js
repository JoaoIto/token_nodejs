import { createHash } from "crypto";

function hashCreate(pwrd){
    return createHash('sha256').update(pwrd).digest('hex');
}

export let hashConsole = hashCreate("stro stro stro");
