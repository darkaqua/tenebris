import {useElectronAPI} from "./useElectronAPI";

export const useSystem = () => {
    const { send, read } = useElectronAPI()
    
    const writeFile = (filePath: string, data: string) => send('write-file', { filePath, data })
    const readFile = (filePath: string): Promise<string> => read('read-file', filePath);
    
    return {
        writeFile,
        readFile
    }
}