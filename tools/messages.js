function notify(message, type) {
    try {
        // eslint-disable-next-line global-require
        require('megalog')[type](message);
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log('\n\nPlease run npm install');
    }
}

if (process.argv[2] === 'dependencies-changed') {
    notify('Dependencies have changed. Run `npm install`', 'warn');
}
