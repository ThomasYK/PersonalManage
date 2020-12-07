const fs = require('fs')
let i = 2;
let content = 
'<template>\n'+
  '<div>'+i+'</div>\n'+
'</template>\n'+
'\n'+
'<script>\n'+
'export default {\n'+
'\n'+
'}\n'+
'</script>\n'+
'\n'+
'<style scoped>\n'+
'\n'+
'</style>'
for (let index = 2; index < 8; index++) {
    
    fs.writeFileSync(`${i}.vue`,content)
    i++;
}
console.log(__dirname)
console.log(__filename)