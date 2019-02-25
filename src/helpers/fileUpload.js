export const processFile = (rows) => {
    let obj = {};
    const result = {};

    result.headers = rows[0].split(',').map(header => {
        if (header[0] === '"') {
            header = header.slice(1);
        }
        if (header[header.length - 1] === '"') {
            header = header.slice(0, header.length - 1);
        }
        return header;
    });
    
    result.success = (
        result.headers.indexOf('location') > -1
        && result.headers.indexOf('name') > -1
        && (result.headers.indexOf('phonelist') > -1 || result.headers.indexOf('phonelist__num') > -1)
        && (result.headers.indexOf('emaillist') > -1 || result.headers.indexOf('emaillist__email') > -1)
    );

    if (result.success) {
        result.list = rows.slice(1)
            .filter(row => row.trim().length)
            .reduce((acc, row) => {
                obj = {};
    
                row.split(',')
                    .map(data => {
                        if (data[0] === '"') {
                            data = data.slice(1);
                        }
                        if (data[data.length - 1] === '"') {
                            data = data.slice(0, data.length - 1);
                        }
                        return data;
                    }).forEach((detail, i) => {
                        obj[result.headers[i]] = detail;
                    });
    
                acc.push(
                    obj
                );
                return acc;
            }, [])
            .map((data, i) => {
                if (typeof(data.emaillist) !== "object") {
                    data['emaillist'] = [];
                }
                if (typeof(data.emaillist__email) === "string") {
                    data['emaillist'].push({ email: data.emaillist__email });
                } else {
                    data['emaillist'].push({});
                }
                if (typeof(data.emaillist__type) === "string") {
                    data['emaillist'][0]['type'] = data.emaillist__type;
                }

                if (typeof(data.phonelist) !== "object") {
                    data['phonelist'] = [];
                }
                if (typeof(data.phonelist__num) === "string") {
                    data['phonelist'].push({ num: data.phonelist__num });
                } else {
                    data['phonelist'].push({});
                }
                if (typeof(data.phonelist__type) === "string") {
                    data['phonelist'][0]['type'] = data.phonelist__type;
                }

                return data;
            });
    } else {
        result.columns = {
            location: result.headers.indexOf('location') > -1 ? 'available' : 'unavailable',
            name: result.headers.indexOf('name') > -1 ? 'available' : 'unavailable',
            phonelist: (result.headers.indexOf('phonelist') > -1 || result.headers.indexOf('phonelist__num') > -1) ? 'available' : 'unavailable',
            emaillist: (result.headers.indexOf('emaillist') > -1 || result.headers.indexOf('emaillist__email') > -1) ? 'available' : 'unavailable'
        }
    }

    return result;
};