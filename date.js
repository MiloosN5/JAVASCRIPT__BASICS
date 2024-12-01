export const date = () => {

    const constructor = () => {

        console.log(new Date()); // 2024-11-30T12:47:43.668Z
        console.log(new Date("December 1, 2024 19:17:22")); // 2024-12-01T18:17:22.000Z
        console.log(new Date("2024-12-01T19:17:22")); // 2024-12-01T18:17:22.000Z
        console.log(new Date(2024, 11, 0)); // 2024-11-29T23:00:00.000Z (the month is 0-indexed)
        console.log(new Date(2024, 11, 1)); // 2024-11-30T23:00:00.000Z (the month is 0-indexed)
        console.log(new Date(2024, 11, 2)); // 2024-12-01T23:00:00.000Z (the month is 0-indexed)
        console.log(new Date(24, 11, 2)); // 1924-12-01T23:00:00.000Z (Two digits are used only for the years 1900-1999; for years 2000 and beyond, the full year must be expressed explicitly)
        console.log(new Date(2024, 11, 1, 19, 17, 22)); // 2024-12-01T18:17:22.000Z
        console.log(new Date(628021800000)); // 1989-11-25T18:30:00.000Z (passing epoch timestamp)
        console.log(new Date(undefined)); // Invalid Date
        console.log(new Date(null)); // 1970-01-01T00:00:00.000Z
        console.log(new Date(["2024-12-01", "19:17:22"])); // 2024-12-01T18:17:22.000Z
        console.log(new Date(["2024-12-01", "19:17:22Z"])); // 2024-12-01T19:17:22.000Z

    }

    const staticMethods = () => {

        console.log(Date.now()); // 1732971330952

        const parse = () => {
            console.log(Date.parse("2024-12-01")); // 1733011200000
            console.log(Date.parse("2024-12-01T00:00:00.000Z")); // 1733011200000
            console.log(Date.parse("2024-12-01T00:00:00.000+00:00")); // 1733011200000
            console.log(Date.parse("2024-12-01T00:00:00")); // 1733007600000
            console.log(Date.parse("Dec 1, 2024")); // 1733007600000
            console.log(Date.parse("Sun, 01 Dec 2024 00:00:00")); // 1733007600000
            console.log(Date.parse("2024,12,1")); // 1733007600000
            console.log(Date.parse("Sun, 01 Dec 2024 00:00:00 GMT+0300")); // 1733000400000
            console.log(Date.parse("0")); // 946681200000
            console.log(Date.parse("28")); // NaN
            console.log(Date.parse("2024-28-01")); // NaN
            console.log(Date.parse("2024-02-30")); // 1709251200000
            console.log(Date.parse("Dec 32, 2024")); // NaN
            console.log(Date.parse("2024/12/01")); // 1733007600000
            console.log(Date.parse("2024/12/44")); // NaN
            console.log(Date.parse("02/30/2024")); // 1709247600000
            console.log(Date.parse("01 Dec 2024")); // 1733007600000
            console.log(Date.parse("01 Decem 2024")); // 1733007600000
            console.log(Date.parse("01 December 2024")); // 1733007600000
            console.log(Date.parse("04 DecFoo 2024")); // 1733266800000
            console.log(Date.parse("04 De 2024")); // NaN
        }
        
        const UTC = () => {
            console.log(Date.UTC(2024, 11, 1, 18, 17, 22)); // 1733077042000
            console.log(Date.parse(2024, 11, 1, 18, 17, 22)); // 1704067200000
        
            const utcDate1 = new Date(Date.UTC(2024, 11, 1, 18, 17, 22));
            console.log(utcDate1.toUTCString()); // Sun, 01 Dec 2024 18:17:22 GMT
        }

        // parse();
        // UTC();
        
    }

    const instanceProperty = () => {
        const date1 = new Date('December 1, 2024 05:17:22');
        console.log(date1.constructor); // [Function: Date]
        console.log(date1.constructor === Date) // true
        console.log(date1.constructor === Object) // false
    }

    const instanceMethods = () => {

        const getDate = () => {
            console.log(new Date().getDate()); // 30 (November 30)
            const date1 = new Date("2024-12-01T18:17:22");
            console.log(date1.getDate()); // 1
        }

        const getDay = () => {
            console.log(new Date().getDay()) // 6 (Saturday)
            const date1 = new Date('December 1, 2024 23:15:30');
            console.log(date1.getDay()); // 0 (Sunday)
        }

        const getFullYear = () => {
            console.log(new Date().getFullYear()) // 2024
            const date1 = new Date('2024-12-01T23:15:30');
            console.log(date1.getFullYear()); // 2024
        }

        const getHours = () => {
            console.log(new Date().getHours()) // 15
            const date1 = new Date('2024-12-01T23:15:30');
            console.log(date1.getHours()); // 23            
        }

        const getMilliseconds = () => {
            console.log(new Date().getMilliseconds()) // 199
            const date1 = new Date('2024-12-01T23:15:30');
            console.log(date1.getMilliseconds()); // 0 
        }
        
        const getMinutes = () => {
            console.log(new Date().getMinutes()) // 19
            const date1 = new Date('2024-12-01T23:15:30');
            console.log(date1.getMinutes()); // 15             
        }

        const getMonth = () => {
            console.log(new Date().getMonth()) // 10
            const date1 = new Date('2024-12-01T23:15:30');
            console.log(date1.getMonth()); // 11
        }

        const getSeconds = () => {
            console.log(new Date().getSeconds()) // 14
            const date1 = new Date('2024-12-01T23:15:30');
            console.log(date1.getSeconds()); // 30            
        }

        const getTime = () => {
            // milliseconds since Jan 1, 1970, 00:00:00.000 GMT
            console.log(new Date().getTime()) // 1732976655914 
            const date1 = new Date('2024-12-01T23:15:30');
            console.log(date1.getTime()); // 1733091330000

            // Using getTime() for copying dates
            const date2 = new Date(1994, 12, 10);
            const date2_copy = new Date();
            date2_copy.setTime(date2.getTime());
            console.log(date2.getTime()); // 789692400000
            console.log(date2_copy.getTime()); // 789692400000

            // measuring execution time
            let date3_end, date3_start;

            date3_start = new Date();
            for (let i = 0; i < 1000; i++) {
                Math.sqrt(i);
            }
            date3_end = new Date();

            console.log('start', date3_start.getTime()); // start 1732976941202
            console.log('end', date3_end.getTime()); // end 1732976941202
            console.log(`Operation took ${date3_end.getTime() - date3_start.getTime()} msec`); // Operation took 0 msec

        }

        const getTimezoneOffset = () => {
            const date1 = new Date('December 1, 2024 23:15:30 GMT+07:00');
            const date2 = new Date('December 1, 2024 23:15:30 GMT-07:00');
            const date3 = new Date();

            console.log(date1.getTimezoneOffset()); // -60
            console.log(date2.getTimezoneOffset()); // -60
            console.log(date1.getTimezoneOffset() - date2.getTimezoneOffset()); // 0
            console.log(date1.getTimezoneOffset() - date3.getTimezoneOffset()); // 0
            console.log(date2.getTimezoneOffset() - date3.getTimezoneOffset()); // 0

            const date4 = new Date('December 1, 2024 23:15:30 GMT+07:00');
            const date5 = new Date('December 1, 2024 23:15:30 GMT+04:00');
            const date6 = new Date();

            console.log(date4.getTimezoneOffset()); // -60
            console.log(date5.getTimezoneOffset()); // -60
            console.log(date4.getTimezoneOffset() - date5.getTimezoneOffset()); // 0
            console.log(date4.getTimezoneOffset() - date6.getTimezoneOffset()); // 0
            console.log(date5.getTimezoneOffset() - date6.getTimezoneOffset()); // 0

            const date7 = new Date('2024-12-01T23:15:30-02:00');
            const date8 = new Date('2024-12-01T23:15:30+05:00');
            const date9 = new Date();
            
            console.log(date7.getTimezoneOffset()); // -60
            console.log(date8.getTimezoneOffset()); // -60
            console.log(date7.getTimezoneOffset() - date8.getTimezoneOffset()); // 0
            console.log(date7.getTimezoneOffset() - date9.getTimezoneOffset()); // 0
            console.log(date8.getTimezoneOffset() - date9.getTimezoneOffset()); // 0
        
            const date10 = new Date("2024-12-01");
            const date11 = new Date("2024-08-01");
            const date12 = new Date();

            console.log(date10.getTimezoneOffset()); // -60
            console.log(date11.getTimezoneOffset()); // -120
            console.log(date10.getTimezoneOffset() - date11.getTimezoneOffset()); // 60
            console.log(date10.getTimezoneOffset() - date12.getTimezoneOffset()); // 0
            console.log(date11.getTimezoneOffset() - date12.getTimezoneOffset()); // -60
        }

        const getUTCDate = () => {
            console.log(new Date().getDate()); // 30
            console.log(new Date().getUTCDate()); // 30 

            const date1 = new Date("2024-12-01T18:17:22");
            console.log(date1.getDate()); // 1
            console.log(date1.getUTCDate()); // 1

            const date2 = new Date('December 1, 2024 23:15:30 GMT+11:00');
            console.log(date2.getDate()); // 1
            console.log(date2.getUTCDate()); // 1

            const date3 = new Date('December 1, 2024 23:15:30 GMT-11:00');
            console.log(date3.getDate()); // 2
            console.log(date3.getUTCDate()); // 2
        }

        const getUTCDay = () => {
            const date1 = new Date('December 1, 2024 23:15:30 GMT+11:00');
            const date2 = new Date('December 1, 2024 23:15:30 GMT-11:00');

            console.log(date1.getUTCDay()); // 0
            console.log(date2.getUTCDay()); // 1
        }

        const getUTCFullYear = () => {
            const date1 = new Date('December 31, 2024 23:15:30 GMT+11:00');
            const date2 = new Date('December 31, 2024 23:15:30 GMT-11:00');

            console.log(date1.getUTCFullYear()); // 2024
            console.log(date2.getUTCFullYear()); // 2025
        }

        const getUTCHours = () => {
            const date1 = new Date('December 1, 2024 23:15:30 GMT+11:00');
            const date2 = new Date('December 1, 2024 23:15:30 GMT-11:00');

            console.log(date1.getUTCHours()); // 12
            console.log(date2.getUTCHours()); // 10
        }

        const getUTCMilliseconds = () => {
            const date1 = new Date('2024-12-01T23:15:30.678Z'); 
            console.log(date1.getUTCMilliseconds()); // 678
        }

        const getUTCMinutes = () => {
            const date1 = new Date('December 1, 2024 23:15:30 GMT+11:00');
            const date2 = new Date('December 1, 2024 23:15:30 GMT-11:20');

            console.log(date1.getUTCMinutes()); // 15
            console.log(date2.getUTCMinutes()); // 35            
        }

        const getUTCMonth = () => {
            const date1 = new Date('December 31, 2024 23:15:30 GMT+11:00');
            const date2 = new Date('December 31, 2024 23:15:30 GMT-11:00');

            console.log(date1.getUTCMonth()); // 11
            console.log(date2.getUTCMonth()); // 0    
        }

        const getUTCSeconds = () => {
            const date1 = new Date('2024-12-01T23:15:30.678Z'); 
            console.log(date1.getUTCSeconds()); // 30
        }

        const setDate = () => {
            const date1 = new Date('December 1, 2024 23:15:30');
            date1.setDate(24);
            console.log(date1.getDate()) // 24
            date1.setDate(0);
            console.log(date1.getDate()); // 30
            date1.setDate(1);
            console.log(date1.getDate()); // 1
            date1.setDate(36);
            console.log(date1.getDate()); // 6 (30 + 6) (We switched to November because of a previous call to setDate(0))

            const date2 = new Date('March 1, 2024 23:15:30');
            date2.setDate(24);
            console.log(date2.getDate()) // 24
            date2.setDate(0);
            console.log(date2.getDate()); // 29
            date2.setDate(1);
            console.log(date2.getDate()); // 1
            date2.setDate(36);
            console.log(date2.getDate()); // 7 (29 + 7) (We switched to February because of a previous call to setDate(0))
        }

        const setFullYear = () => {
            const date1 = new Date('December 1, 1987 23:15:30');
            date1.setFullYear(2024);
            console.log(date1.getFullYear()); // 2024
            date1.setFullYear(0);
            console.log(date1.getFullYear()); // 0
        }

        const setHours = () => {
            const date1 = new Date('December 1, 2024 23:15:30');
            date1.setHours(20);
            console.log(date1); // 2024-12-01T19:15:30.000Z
            console.log(date1.getHours()); // 20
            date1.setHours(17, 21, 22);
            console.log(date1); // 2024-12-01T16:21:22.000Z
            console.log(date1.getHours()); // 17
        }

        const setMilliseconds = () => {
            const date1 = new Date('December 1, 2024 23:15:30');
            console.log(date1.getMilliseconds()); // 0
            date1.setMilliseconds(456);
            console.log(date1.getMilliseconds()); // 456
            console.log(date1); // 2024-12-01T22:15:30.456Z
        }

        const setMinutes = () => {
            const date1 = new Date('December 1, 2024 23:15:30');
            date1.setMinutes(45); 
            console.log(date1.getMinutes()); // 45
            console.log(date1); // 2024-12-01T22:45:30.000Z
        }

        const setMonth = () => {
            const date1 = new Date('December 1, 2024 23:15:30');
            date1.setMonth(3);
            console.log(date1.getMonth()); // 3
            console.log(date1); // 2024-04-01T21:15:30.000Z

            const date2 = new Date(2010, 2, 31);
            date2.setMonth(1);
            console.log(date2); // 2010-03-02T23:00:00.000Z
        }

        const setSeconds = () => {
            const date1 = new Date('December 1, 2024 23:15:30');
            date1.setSeconds(42);
            console.log(date1.getSeconds()); // 42
            console.log(date1); // 2024-12-01T22:15:42.000Z
        }
        
        const setTime = () => {
            const date1 = new Date('December 1, 2024, 12:00:00');
            const date2 = new Date();
            date2.setTime(date1.getTime());
            console.log(date2); // 2024-12-01T11:00:00.000Z

            let fiveMinutesInMilliSeconds = 5 * 60 * 1000;
            date2.setTime(date2.getTime() + fiveMinutesInMilliSeconds);
            console.log(date2); // 2024-12-01T11:05:00.000Z
        }

        const setUTCDate = () => {
            const date1 = new Date('December 1, 2024 23:15:30 GMT-3:00');
            console.log(date1.getUTCDate()); // 2
            date1.setUTCDate(19);
            console.log(date1.getUTCDate()); // 19
        };

        const setUTCFullYear = () => {
            const date1 = new Date('December 31, 2024 23:15:30 GMT-3:00');
            console.log(date1.getUTCFullYear()); // 2025         
            console.log(date1.toUTCString()); // Wed, 01 Jan 2025 02:15:30 GMT            
            date1.setUTCFullYear(1975);
            console.log(date1.toUTCString()); // Wed, 01 Jan 1975 02:15:30 GMT
        };

        const setUTCHours = () => {
            const date1 = new Date('December 1, 2024 23:15:30 GMT-3:00');
            console.log(date1.toUTCString()); // Mon, 02 Dec 2024 02:15:30 GMT        
            console.log(date1.getUTCHours()); //  2          
            date1.setUTCHours(23);
            console.log(date1.toUTCString()); // Mon, 02 Dec 2024 23:15:30 GMT
        };

        const setUTCMilliseconds = () => {
            const date1 = new Date('2024-12-01T14:52:11.055Z');
            console.log(date1.toUTCString()); // Sun, 01 Dec 2024 14:52:11 GMT
            console.log(date1.getUTCMilliseconds());  // 55          
            date1.setUTCMilliseconds(420);
            console.log(date1.toUTCString()); // Sun, 01 Dec 2024 14:52:11 GMT
            console.log(date1.getUTCMilliseconds()); // 420
        };

        const setUTCMinutes = () => {
            const date1 = new Date('December 31, 2024, 23:15:30 GMT+11:00');
            console.log(date1.toUTCString()); // Tue, 31 Dec 2024 12:15:30 GMT
            console.log(date1.getUTCMinutes());  // 15          
            date1.setUTCMinutes(25);
            console.log(date1.toUTCString()); // Tue, 31 Dec 2024 12:25:30 GMT
            console.log(date1.getUTCMinutes()); // 25
        };

        const setUTCMonth = () => {
            const date1 = new Date('December 31, 2024 23:15:30 GMT-3:00');
            console.log(date1.toUTCString()); // Wed, 01 Jan 2025 02:15:30 GMT           
            console.log(date1.getUTCMonth()); // 0           
            date1.setUTCMonth(11);
            console.log(date1.toUTCString()); // Mon, 01 Dec 2025 02:15:30 GMT
        };

        const setUTCSeconds = () => {
            const date1 = new Date('December 31, 2024, 23:15:30 GMT+11:00');
            console.log(date1.getUTCSeconds()); // 30           
            date1.setUTCSeconds(39);
            console.log(date1.getUTCSeconds()); // 39
        };

        const toDateString = () => {
            const date1 = new Date(2024, 7, 22, 18, 20, 4);
            console.log(date1.toString()); // Thu Aug 22 2024 18:20:04 GMT+0200 (Central European Summer Time)
            console.log(date1.toDateString()); // Thu Aug 22 2024
        };

        const toISOString = () => {
            const date1 = new Date('22 October 2022 18:55 UTC');
            console.log(date1.toString()); // Sat Oct 22 2022 20:55:00 GMT+0200 (Central European Summer Time)
            console.log(date1.toISOString()); // 2022-10-22T18:55:00.000Z
        };

        const toJSON = () => {
            const date1 = new Date('May 13, 2015 23:15:30 UTC');
            console.log(date1.toUTCString()); // Wed, 13 May 2015 23:15:30 GMT
            const jsonDate1 = date1.toJSON();
            console.log(jsonDate1); // 2015-05-13T23:15:30.000Z
            console.log(new Date(jsonDate1).toUTCString()); // Wed, 13 May 2015 23:15:30 GMT
        
            // init date
            const jsonDate2 = new Date(0).toJSON(); 
            const date2_backToDate = new Date(jsonDate2);
            console.log(jsonDate2, typeof(jsonDate2)); // 1970-01-01T00:00:00.000Z string
            console.log(date2_backToDate, typeof(date2_backToDate)); // 1970-01-01T00:00:00.000Z object
        
            // serialization round-tripping
            const fileData_3 = {
                author: "Maria",
                title: "Date.prototype.toJSON()",
                createdAt: new Date(2019, 3, 15),
                updatedAt: new Date(2020, 6, 26),
            };
            const response_3 = JSON.stringify(fileData_3);
                            
            const data_3 = JSON.parse(response_3, (key, value) => {
                if (key === "createdAt" || key === "updatedAt") {
                    return new Date(value);
                }
                return value;
            });
              
            console.log(data_3);
            /*
                {
                    author: 'Maria',
                    title: 'Date.prototype.toJSON()',
                    createdAt: 2019-04-14T22:00:00.000Z,
                    updatedAt: 2020-07-25T22:00:00.000Z
                }
            */
            console.log(typeof(data_3.createdAt)); // object
            console.log(typeof(data_3.updatedAt)); // object
        };

        const toLocaleDateString = () => {
            const date1 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            };
            console.log(date1.toLocaleDateString('de-DE', options)); // Donnerstag, 20. Dezember 2012
            console.log(date1.toLocaleDateString('ar-EG', options)); // الخميس، ٢٠ ديسمبر ٢٠١٢
            console.log(date1.toLocaleDateString(undefined, options)); // Thursday, December 20, 2012
        };

        const toLocaleString = () => {
            const date1 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
            console.log(date1.toLocaleString('en-GB', { timeZone: 'UTC' })); // 20/12/2012, 03:00:00
            console.log(date1.toLocaleString('ko-KR', { timeZone: 'UTC' })); // 2012. 12. 20. 오전 3:00:00
        };

        const toLocaleTimeString = () => {
            const date1 = new Date('December 1, 2024 23:15:30 GMT+00:00');
            console.log(date1.toLocaleTimeString('en-US')); // 12:15:30 AM
            console.log(date1.toLocaleTimeString('it-IT')); // 00:15:30
            console.log(date1.toLocaleTimeString('ar-EG')); // ١٢:١٥:٣٠ ص
        };

        const toString = () => {
            const date1 = new Date('December 1, 2024 23:15:30');
            console.log(date1.toString()); // Sun Dec 01 2024 23:15:30 GMT+0100 (Central European Standard Time)
        };

        const toTimeString = () => {
            const date1 = new Date('December 1, 2024 23:15:30');
            console.log(date1.toTimeString()); // 23:15:30 GMT+0100 (Central European Standard Time)
        };

        const toUTCString = () => {
            const date1 = new Date('1 December 2024 00:00:00 PDT');
            console.log(date1.toUTCString()); // Sun, 01 Dec 2024 07:00:00 GMT
        };

        const valueOf = () => {
            const date1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));
            console.log(date1.valueOf()); // 823230245000
            const date2 = new Date('02 Feb 1996 03:04:05 GMT');
            console.log(date2.valueOf()); // 823230245000
        };

        const SymbolToPrimitive = () => {
            const date = new Date('1 December 2024 10:51');
            console.log(date[Symbol.toPrimitive]('string')); // Sun Dec 01 2024 10:51:00 GMT+0100 (Central European Standard Time)
            console.log(date[Symbol.toPrimitive]('number')); // 1733046660000
        };

        // getDate();
        // getDay();
        // getFullYear();
        // getHours();
        // getMilliseconds();
        // getMinutes();
        // getMonth();
        // getSeconds();
        // getTime();
        // getTimezoneOffset();
        // getUTCDate();
        // getUTCDay();
        // getUTCFullYear();
        // getUTCHours();
        // getUTCMilliseconds();
        // getUTCMinutes();
        // getUTCMonth();
        // getUTCSeconds();
        // setDate();
        // setFullYear();
        // setHours();
        // setMilliseconds();
        // setMinutes();
        // setMonth();
        // setSeconds();
        // setTime();
        // setUTCDate();
        // setUTCFullYear();
        // setUTCHours();
        // setUTCMilliseconds();
        // setUTCMinutes();
        // setUTCMonth();
        // setUTCSeconds();
        // toDateString();
        // toISOString();
        // toJSON();
        // toLocaleDateString();
        // toLocaleString();
        // toLocaleTimeString();
        // toString();
        // toTimeString();
        // toUTCString();
        // valueOf();
        // SymbolToPrimitive();

    }

    const extraExamples = () => {

        const JSClock = () => {
            const time = new Date();
            const hour = time.getHours();
            const minute = time.getMinutes();
            const second = time.getSeconds();
            let temp = String(hour % 12);
            if (temp === "0") {
              temp = "12";
            }
            temp += (minute < 10 ? ":0" : ":") + minute;
            temp += (second < 10 ? ":0" : ":") + second;
            temp += hour >= 12 ? " P.M." : " A.M.";
            return temp;
          }

        console.log(JSClock()); // 1:09:01 P.M.
          
    }

    // constructor();
    // staticMethods();
    // instanceProperty();
    // instanceMethods();
    // extraExamples();

}