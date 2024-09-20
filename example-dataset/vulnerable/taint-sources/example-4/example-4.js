;(function() {
    function merge_recursive(base, extend) {
        for (var key in extend) {
                base[key] = extend[key];
        }
    }

    function merge(clone, recursive, argv) {

        var result = argv[0], size = argv.length;


        for (var index=0;index<size;++index) {

            var item = argv[index]

            for (var key in item) {
                var sitem = item[key];
                result[key] = merge_recursive(result[key], sitem);
            }
        }
    }

})();