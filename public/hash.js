/* eslint-disable no-restricted-globals */
self.importScripts("/spark-md5.min.js");

self.onmessage = (e) => {
    console.log("e", e);
    const { chunks } = e.data;
    if (!chunks) {
        self.postMessage({
            hash: "error",
        });
        self.close();
        return;
    }
    const spark = new self.SparkMD5.ArrayBuffer();
    let count = 0;
    function loadNext(idx) {
        const reader = new FileReader();
        reader.onload = (e) => {
            count++;
            spark.append(e.target.result);

            if (count >= chunks.length) {
                const hash = spark.end();
                self.postMessage({
                    hash,
                });
                self.close();
            } else {
                loadNext(count);
            }
        };
        reader.readAsArrayBuffer(chunks[idx]);
    }

    loadNext(0);
};
