const path = require('path');
console.log(__filename); //путь до файлу
console.log(path.basename(__filename)); //Найменування файла
console.log(path.dirname(__filename));//им'я каталога
console.log(path.extname(__filename)); //росширення файла
console.log(path.parse(__filename)); //  информація про файл 
console.log(path.join(__dirname,'test','second.html')); // об'еднання даних у  path (__dirname,'test','second.html')
console.log(path.resolve(__dirname,'./test','second.html')); //ппреобразування путі до файлу 