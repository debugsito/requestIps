Please provide a short written description of your approach that explains:

• What would you do differently if you had more time?
 - Code more clean, store data on BD for persist information, implement helpers
• What is the runtime complexity of each function?
   - It would seem that the most complete is to100 because it must search and 
     order a lot of information, but if you are storing and ordering the information as you want it at 
     the end, the one that gets more complicated is request_handled because 
     it tries to avoid doing something more or duplicating code so as not to 
     delay the execution time of this function, since it would be a kind of 
     middleware and could slow the application
• How does your code work?
   - first I create an object to count and store the number of requests
     and an array to store the tops (array to carry the order in the key)
     then I am counting the number of requests from the ip
     and I look for the top that corresponds to it and I assign the ip to the array in the top that corresponds to it
     and I get the account of the amount of tops that I wear, always less than 100
     then in top100 I just have to print the array with the tops
• What other approaches did you decide not to pursue?
   - not store everything and order when needed, but order as it is stored  
• How would you test this?
   -   creating a script that generates ips and stores them in mongo or firebase, then I compare results
 