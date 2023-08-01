"use server";


export const  getReaddirsync = (path:string )=>{
    const fs = require("fs");
    const filenames = fs.readdirSync(path);
    return filenames    
}
