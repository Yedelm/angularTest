import { MessageService } from "./message.service";

describe('MessageService', () => {
    let service: MessageService;

    beforeEach(() => {
        // service = new MessageService();        
    })

    it('should have no message to start', () => {
        //put arrange into each test
        service = new MessageService();
        
        expect(service.messages.length).toBe(0);
    })

    it('should add a message when add is called', () => {
        //arrange  --- setup the initial state
        service = new MessageService();

        //act
        service.add('message1')

        //assert
        expect(service.messages.length).toBe(1);
    })

    it('should remove all the messages when clear is called', () => {
        //arrange  --- setup the initial state
        service = new MessageService();
        service.add('message1')        

        //act
        service.clear();

        //assert
        expect(service.messages.length).toBe(0);
    })
})