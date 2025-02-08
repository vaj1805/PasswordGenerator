so studied useCallback hook for multiple events and changes to pwd 
generation type by  numbers or chars.

new problem which arose :
want pwd to be generated as soon as reload occurs.

how to do that : 
call function directly in react file -> error(too many renders)
use a button , onclick generates pwd.

or we could use a new hook called useEffect
when page loads in this project first time useEffect is called 
useEffect : lets u synchronize a component with an external system.


useCallBack memorizes function , jitna ho sake.

useRef to collect reference of an element for manipulation.