
export const useElectronAPI = () => {
    const electronAPI = window['electronAPI'];
    
    const send = (event: string, data: any = undefined) => electronAPI.send(event, data)
    const read = (event: string, data: any = undefined): Promise<any> => {
        const promise = new Promise((resolve) =>
          electronAPI.read(event, resolve)
        )
        send(event, data);
        return promise;
    }
    
    return {
        send,
        read,
    }
}