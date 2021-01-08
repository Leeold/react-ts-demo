// Events
// -----------------
// Thanks to:
//  - https://github.com/documentcloud/backbone/blob/master/backbone.js
//  - https://github.com/joyent/node/blob/master/lib/events.js

// Regular expression used to split event strings
const eventSplitter = /\s+/;

// A module that can be mixed in to *any object* in order to provide it
// with custom events. You may bind with `on` or remove with `off` callback
// functions to an event; `trigger`-ing an event fires all callbacks in
// succession.
//
//     var object = new Events();
//     object.on('expand', function(){ alert('expanded'); });
//     object.trigger('expand');
//

// Execute callbacks
function triggerEvents(
  list: ((...args: any[]) => any)[],
  args: any[],
  context?: any
): boolean {
  let pass = true;

  if (list) {
    const l = list.length,
      a1 = args[0],
      a2 = args[1],
      a3 = args[2];
    let i = 0;
    // call is faster than apply, optimize less than 3 argu
    // http://blog.csdn.net/zhengyinhui100/article/details/7837127
    switch (args.length) {
      case 0:
        for (; i < l; i += 2) {
          pass = list[i].call(list[i + 1] || context) !== false && pass;
        }
        break;
      case 1:
        for (; i < l; i += 2) {
          pass = list[i].call(list[i + 1] || context, a1) !== false && pass;
        }
        break;
      case 2:
        for (; i < l; i += 2) {
          pass = list[i].call(list[i + 1] || context, a1, a2) !== false && pass;
        }
        break;
      case 3:
        for (; i < l; i += 2) {
          pass =
            list[i].call(list[i + 1] || context, a1, a2, a3) !== false && pass;
        }
        break;
      default:
        for (; i < l; i += 2) {
          pass = list[i].apply(list[i + 1] || context, args) !== false && pass;
        }
        break;
    }
  }
  // trigger will return false if one of the callbacks return false
  return pass;
}

export default class EventEmitter implements Event {
  private __events: Record<string, any[]> = Object.create(null);

  public on(
    events: string,
    callback: (...args: any[]) => any,
    context?: any
  ): Event {
    let event: string | undefined, list: any[];
    if (!callback) {
      return this;
    }

    const cache = this.__events || (this.__events = Object.create(null));
    const eventArray = events.split(eventSplitter);

    for (let i = 0, { length } = eventArray; i < length; i++) {
      // Copy callback lists to prevent modification.
      event = eventArray[i];
      list = cache[event] || (cache[event] = []);
      list.push(callback, context);
    }

    return this;
  }

  public off(
    events: string,
    callback?: (...args: any[]) => any,
    context?: any
  ): Event {
    let cache: Record<string, any[]>, event: string | undefined, list: any[];

    if (!(cache = this.__events)) {
      return this;
    }

    if (!(events || callback || context)) {
      this.__events = Object.create(null);
      return this;
    }

    const eventArray = events
      ? events.split(eventSplitter)
      : Object.keys(cache);

    for (let i = 0, { length } = eventArray; i < length; i++) {
      // Copy callback lists to prevent modification.
      event = eventArray[i];
      list = cache[event];
      if (!list) {
        continue;
      }

      if (!(callback || context)) {
        delete cache[event];
        continue;
      }

      for (let j = list.length - 2; j >= 0; j -= 2) {
        if (
          !(
            (callback && list[j] !== callback) ||
            (context && list[j + 1] !== context)
          )
        ) {
          list.splice(j, 2);
        }
      }
    }

    return this;
  }

  public trigger(events: string, rest: any[]): boolean {
    let cache: Record<string, any[]>;
    if (!(cache = this.__events)) {
      return false;
    }

    let list: any[],
      returned = true;

    const eventArray = events.split(eventSplitter);

    // For each event, walk through the list of callbacks twice, first to
    // trigger the event
    for (let i = 0, { length } = eventArray; i < length; i++) {
      // Copy callback lists to prevent modification.
      if ((list = cache[eventArray[i]])) {
        list = list.slice();
      }

      // Execute event callbacks
      returned =
        triggerEvents(list as ((...args: any[]) => any)[], rest, this) &&
        returned;
    }

    return returned;
  }
}

export interface Event {
  on(events: string, callback: (...args: any[]) => any, context?: any): Event;
  off(events: string, callback?: (...args: any[]) => any, context?: any): Event;
  trigger(events: string, rest: any[]): boolean;
}
