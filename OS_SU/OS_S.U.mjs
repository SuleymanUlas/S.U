import { Monitor } from 'os-monitor';
/**     '""""""""""""""""""""'       

*?        e═-a «     ─▄ww⌐  ─~        
*?
*?       ▓',  ²M      ▐''[   ]▌       
*?
*?       `*''╖µ       ▐''[   ]▌       
*?
*?           ";'┐     ▐,'[   ]▌       
*?
*?       ▌µ   ▐,  xk  └▌,╕  ,#        
*?
*?       `        `      `            
*?
        `````````````````````  
 */
const monitor = new Monitor();


// basic usage
monitor.start();

// define handler that will always fire every cycle
monitor.on('monitor', (event) => {
  console.log(event.type, 'This event always happens on each monitor cycle!');
});

// define handler for a too high 1-minute load average
monitor.on('loadavg1', (event) => {
  console.log(event.type, 'Load average is exceptionally high!');
});

// define handler for a too low free memory
monitor.on('freemem', (event) => {
  console.log(event.type, 'Free memory is very low!');
});

// define a throttled handler
monitor.throttle('loadavg5', (event) => {

  // whatever is done here will not happen
  // more than once every 5 minutes(300000 ms)

}, monitor.minutes(5));


// change config while monitor is running
monitor.config({
  freemem: 0.3 // alarm when 30% or less free memory available
});


// stop monitor
monitor.stop();


// check whether monitor is running or not
monitor.isRunning(); // -> true / false


// use as readable stream
monitor.start({stream: true}).pipe(process.stdout);