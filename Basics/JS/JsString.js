document.write("Slice : " + "JavaScript".slice(2, 6))
document.write("<br>IndexOF : " + "JavaScript".charAt(4))
document.write("<br>LastIndexOf : " + "JavaScript is Best Veru Best".lastIndexOf("Best"))
document.write("<br>Concat : " + "Java".concat("Script"))
document.write("<br>Search : " + "JavaScript".search("Script"));

// i  means not Case Sensitive
// g means Globle
document.write("<br>Search with Ignore Case: " + "JavaScript".search(/script/i));
document.write("<br>Match Globle IgnoreCase : " + "JavaScript".match(/java/gi));
document.write("<br>Replace : " + "JavaBackend".replace("Backend", "FrontEnd"))
document.write("<br>Replace with Check Case : " + "Java-Backend-Backend".replace(/Backend/g, "FrontEnd"))
document.write("<br>LowerCase : " + "JavaScript".toLowerCase())
document.write("<br>UpperCase : " + "JavaScript".toUpperCase())
