function abc(callback) {
    console.log("This is function abc in aaa.js");
    const data={ message: "Hello from abc" };
    callback(data);
}   
function def(data)
{
    console.log("def" + data.message);
    
}
abc(def);
