try {
    var display;
    var console;
    display('My name is JJ');
} catch (err) {
    console.log(err.name + ': ' + err.message);
} finally {
    console.log('This finally block is always executed');
}