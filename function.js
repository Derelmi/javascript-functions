
        // Converts a comma - separated values string to a array
        const csv_to_array = (data, delimiter = ',', omitFirstRow = false) =>
                data
                    .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
                    .split('\n')
                    .map(v => v.split(delimiter));

            console.log(csv_to_array('a,b\nc,d'));
            console.log(csv_to_array('a;b\nc;d', ';'));
            console.log(csv_to_array('head1,head2\na,b\nc,d', ',', true));
   
//             2 JavaScript functions.The first converts temperatures from Celsius to Fahrenheit, and the other Fahrenheit to Celsius.

// [Formula : c / 5 = (f - 32) / 9 where c = temperature in Celsius and f = temperature in Fahrenheit ]
//                 Example: 60°C is 140 °F
//                 45°F is 7.222222222222222°C
            function cToF(celsius) {
                    var cTemp = celsius;
                    var cToFahr = cTemp * 9 / 5 + 32;
                    var message = cTemp + '\xB0C is ' + cToFahr + ' \xB0F.';
                    console.log(message);
                }

                function fToC(fahrenheit) {
                    var fTemp = fahrenheit;
                    var fToCel = (fTemp - 32) * 5 / 9;
                    var message = fTemp + '\xB0F is ' + fToCel + '\xB0C.';
                    console.log(message);
                }
                cToF(60);
                fToC(45);
   
//                 Write a JavaScript function that accepts a number as a parameter and check the
// number is prime or not.
                function test_prime(n) {

                        if (n === 1) {
                            return false;
                        }
                        else if (n === 2) {
                            return true;
                        } else {
                            for (var x = 2; x < n; x++) {
                                if (n % x === 0) {
                                    return false;
                                }
                            }
                            return true;
                        }
                    }

                    console.log(test_prime(13));

//                     Write a JavaScript function which will take an array of numbers stored and find the
// second lowest and second greatest numbers, respectively.
                    function Second_Greatest_Lowest(arr_num) {
                            arr_num.sort(function (x, y) {
                                return x - y;
                            });
                            var uniqa = [arr_num[0]];
                            var result = [];

                            for (var j = 1; j < arr_num.length; j++) {
                                if (arr_num[j - 1] !== arr_num[j]) {
                                    uniqa.push(arr_num[j]);
                                }
                            }
                            result.push(uniqa[1], uniqa[uniqa.length - 2]);
                            return result.join(',');
                        }

                        console.log(Second_Greatest_Lowest([21, 35, 69, 83, 125]));

            // Write a JavaScript function for the following scenarios:
            //   a.Return true is the number passed to it is even.
                        function check_even(num) {
                                return num % 2 == 0;
                            }
                            console.log(check_even(2));  // true
                            console.log(check_even(3)); //false

            //   b.Return the factors of a number passed as a parameter in an array.
                            function factors(n) {
                                    var all_factors = [], i;

                                    for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
                                        if (n % i === 0) {
                                            all_factors.push(i);
                                            if (n / i !== i)
                                                all_factors.push(n / i);
                                        }
                                    all_factors.sort(function (x, y) {
                                        return x - y;
                                    });  // numeric sort
                                    return all_factors;
                                }

                                console.log(factors(15));  // [1,3,5,15] 

            //   c.Returns an array of vowels from a string passed to it as an argument.
                                const vowels = ["a", "e", "i", "o", "u"];
                                    function check_vowels(str) {
                                        var vowel_arr = [];

                                        for (let letter of str.toLowerCase()) {
                                            if (vowels.includes(letter)) {
                                                vowel_arr.push(letter);
                                            }
                                        }
                                        return vowel_arr;
                                    }
                                    console.log(check_vowels("cricket"));  // ['i','e']
                    
   