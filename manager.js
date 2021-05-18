const readline = require("readline");
const manager = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tasks = []

const menu = () => {

	manager.question(`Welcome to your task manager, press: \n\n 1. to see all your tasks \n 2. to add a task \n 3. to delete a task \n 4. to mark a task as done \n 5. to Exit the task manager \n\n Make your choice : `, function(choice){
		let input = parseInt(choice);
		switch(input){
			case 1 :
			console.log(`Here are your tasks : \n${tasks}\n`);
			menu();
			break;

			case 2 : 
			manager.question(`What do you want to do today? \n`, function (tasksInput){
				tasks.push(tasksInput);
				console.log(`you added "${tasksInput}" \n\n Here are your tasks : ${tasks}\n`);
				menu();
			})

			break;

			case 3 : 

			manager.question(`Here's your list : ${tasks} \n What should I remove ? \n`, function(remove){
				
				for(i = tasks.length-1 ; i >= 0 ; i--){
					if(tasks[i] == remove){
						tasks.splice(i, 1);
						console.log(`You successfully removed "${remove}"\n`)
					}
				}

				console.log(`Here's what you still have to do : \n${tasks}`);

				menu();
			})

			break;

			case 4 : 
			
			manager.question(`"${tasks}"\n What have you done in all this ? \n`, function (done){
				for(i = tasks.length-1 ; i >= 0 ; i--){
					if(tasks[i] === done){
						let checked = tasks[i] + " [CHECK]";
						// console.log(checked);
						tasks.splice(i, 1, checked);
					}
				}

				console.log(`Here's your updated list \n"${tasks}"\n`);

				menu();
			})


			break;

			case 5:
		    console.log("\nSee you soon !");
		    process.exit(0);	

		    default:
		    console.log("Please enter a choice between 1 to 5");
		    menu();
		}
	})	
}


menu();