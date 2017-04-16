
export  interface Event{
    payload?:any;
    getEventName():string;
    getPayload():any;
}
class EventImpl implements Event {
    constructor (public payload?:any){
    }
    getEventName():string{
        //Warning: this little trick does not sork in IE10! Surpris!
        //Override in each subclass!
        // Returns the name of the class,so the navigation events have name of the corresponding class
        return (<any>this.constructor).name;
    }
    getPayload():any{
        return this.payload;
    }
}

export class NavigationEvent extends EventImpl{
    constructor (public criteria:string, public payload?: any ){
        super(payload);
    }

    getEventName():string{
        // Returns the name of the class,so the navigation events have name of the corresponding class
        return 'NavigationEvent';
    }

}

export class RefreshEvent extends EventImpl{
    constructor (public critria:string, public payload?: any ){
        super(payload);
    }

    getEventName():string{
        // Returns the name of the class,so the navigation events have name of the corresponding class
        return 'RefreshEvent';
    }

}

export class StartFlowEvent extends EventImpl{
    constructor (public critria:string, public payload?: any ){
        super(payload);
    }

    getEventName():string{
        // Returns the name of the class,so the navigation events have name of the corresponding class
        return 'StartFlowEvent';
    }


}

/*export class ViewContentEvent extends EventImpl{
    constructor (public holderId:string, public component?: EcifComponent ){
        super(component);
    }

    getEventName():string{
        // Returns the name of the class,so the navigation events have name of the corresponding class
        return 'ViewContentEvent';
    }

}*/

export interface Subscriber {
    onEvent(ev:Event):void;
    applyFilter(ev:Event) :boolean;
}

export class SubscriberImpl implements Subscriber {
    private filter:Filter;
    constructor(filter?:Filter){
        this.filter = filter;
    }
    onEvent(ev:Event){
        console.info('onEvent: ' + JSON.stringify(ev));
    }
    public applyFilter(ev:Event):boolean {
        return this.filter ? this.filter.apply(ev) : true;
    }

}

export interface Filter {
    apply(ev:Event) :boolean;
}
export interface JSBus {
    subscribe (eventName:string, sub:Subscriber):void;
    publish (ev:Event):void;
}
class Subscription{
    constructor(public eventName?:string, public subscribers?:Array<Subscriber>) {

    }
}

export class JSBusImpl implements JSBus{
    private subscriptions:Array<Subscription> =[];

    //Map<Event, Array<Subscriber>
    subscribe (eventName:string, sub:Subscriber):void{
        var theSubscription = null;
        for(let subscription of this.subscriptions){
            if (subscription.eventName == eventName){
                theSubscription = subscription;
                break;
            }
        }
        if(!theSubscription){
            theSubscription = new Subscription(eventName, []);
            this.subscriptions.push(theSubscription);
        }
        theSubscription.subscribers.push(sub);
    }

    publish(ev:Event):void{
        if(!ev) return;
        var theSubscription:Subscription = null;
        for(let subscription of this.subscriptions){
            if(subscription.eventName == ev.getEventName()){
                theSubscription = subscription;
                break;
            }
        }
        if(theSubscription){
            for(let subscriber of theSubscription.subscribers){
                if(subscriber.applyFilter(ev)){
                    subscriber.onEvent(ev);
                }else{
                    console.info('Event did not pass filter: ', JSON.stringify(ev));
                }
            }
        } else {
    console.info('No subscription found for event: ', ev.getEventName());

}
}
}