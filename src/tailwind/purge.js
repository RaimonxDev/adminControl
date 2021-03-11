const PurgeCSS = require('purgecss').default;
const fs = require('fs');
const path = require('path');

new PurgeCSS().purge({
    content   : [path.resolve(__dirname, './../**/*.{html, ts}')],
    css       : [path.resolve(__dirname, './../styles/tailwind.scss')],
    extractors: [
        {
            extractor : (content) =>
            {
                return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
            },
            extensions: ['html', 'ts']
        }
    ]
}).then((result) =>
{
    result.forEach(out =>
    {
        fs.writeFileSync(path.resolve(__dirname, out.file), out.css, 'utf-8');
    });

    console.log('src/styles/tailwind.scss successfully purged.');
});


