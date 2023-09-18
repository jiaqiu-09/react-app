import { useCallback, useEffect, useState } from "react";
import SparkMD5 from "spark-md5";

export default function ComputedMd5() {
    const [isLoading, setIsLoading] = useState(false);
    const [timer, setTimer] = useState(0);
    const [md5Value, setMd5Value] = useState(null);
    useEffect(() => {
        let interval;
        if (isLoading) {
            interval = setInterval(() => {
                setTimer((_prev) => _prev + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isLoading]);

    const formatTime = (milliSeconds) => {
        const minutes = Math.floor(milliSeconds / (60 * 1000));
        const seconds = Math.floor((milliSeconds % (60 * 1000)) / 1000);
        const ms = (milliSeconds % 1000)
            .toString()
            .padStart(3, "0")
            .slice(0, 2);
        return `${minutes}:${seconds.toString().padStart(2, "0")}.${ms}`;
    };

    const createChunks = (file) => {
        const blobSlice = File.prototype.slice;
        const chunkSize = 2 * 1024 * 1024;
        let start = 0;
        const chunks = [];
        while (start < file.size) {
            chunks.push(blobSlice.call(file, start, start + chunkSize));
            start += chunkSize;
        }
        return chunks;
    };

    const calculateFile = useCallback(async (file) => {
        if (!file) {
            return;
        }
        console.log("start: ", new Date());
        setIsLoading(true);
        const chunks = await createChunks(file);
        console.log("chunks: ", chunks);

        if (window.Worker) {
            const hash = await new Promise((resolve) => {
                const hashWorker = new Worker("/hash.js");
                hashWorker.postMessage({ chunks });
                hashWorker.onmessage = (e) => {
                    console.log("hash: ", e);
                    resolve(e.data.hash);
                    console.log("end: ", new Date());
                };
            });
            setMd5Value(hash);
        }

        setIsLoading(false);
    }, []);

    const handleChange = (e) => {
        console.log("file changed", e.target.files);
        setTimer(0);
        const file = e.target.files ? e.target.files[0] : null;
        calculateFile(file);
    };
    return (
        <>
            <h2>Computed Md5 Value</h2>
            <h3>md5 value: {md5Value}</h3>
            <h3>timer: {formatTime(timer)}</h3>
            <input onChange={handleChange} type="file" />
        </>
    );
}
