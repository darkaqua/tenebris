
export const useElectronAPI = () => {
    const electronAPI = window['electronAPI'];
    
    const send = (event: string, data: any = undefined) => electronAPI.send(event, data)
    return {
        send,
    }
}