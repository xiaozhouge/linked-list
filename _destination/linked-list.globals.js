(function(e){var t={},r=t.exports={};t.exports=n;function n(){if(arguments.length){return n.from(arguments)}}var i=n.prototype,a="An argument without append, prepend, or detach methods was given to `List";n.of=function(){return n.from.call(this,arguments)};n.from=function(e){var t=new this,r,n,i;if(e&&(r=e.length)){n=-1;while(++n<r){if(null!=(i=e[n])){t.append(i)}}}return t};i.head=null;i.tail=null;i.toArray=function(){var e=this.head,t=[];while(e){t.push(e);e=e.next}return t};i.prepend=function(e){if(!e){return false}if(!e.append||!e.prepend||!e.detach){throw new Error(a+"#prepend`.")}var t,r;t=this;if(r=t.head){return r.prepend(e)}e.detach();e.list=t;return t.head=e};i.append=function(e){if(!e){return false}if(!e.append||!e.prepend||!e.detach){throw new Error(a+"#append`.")}var t,r,n;t=this;if(n=t.tail){return n.append(e)}if(r=t.head){return r.append(e)}e.detach();e.list=t;return t.head=e};function p(){}n.Item=p;var d=p.prototype;d.next=d.prev=d.list=null;d.detach=function(){var e=this,t=e.list,r=e.prev,n=e.next;if(!t){return e}if(t.tail===e){t.tail=r}if(t.head===e){t.head=n}if(t.tail===t.head){t.tail=null}if(r){r.next=n}if(n){n.prev=r}e.prev=e.next=e.list=null;return e};d.prepend=function(e){if(!e||!e.append||!e.prepend||!e.detach){throw new Error(a+"Item#prepend`.")}var t=this,r=t.list,n=t.prev;if(!r){return false}e.detach();if(n){e.prev=n;n.next=e}e.next=t;e.list=r;t.prev=e;if(t===r.head){r.head=e}if(!r.tail){r.tail=t}return e};d.append=function(e){if(!e||!e.append||!e.prepend||!e.detach){throw new Error(a+"Item#append`.")}var t=this,r=t.list,n=t.next;if(!r){return false}e.detach();if(n){e.next=n;n.prev=e}e.prev=t;e.list=r;t.next=e;if(t===r.tail||!r.tail){r.tail=e}return e};e.LinkedList=t.exports})(this);