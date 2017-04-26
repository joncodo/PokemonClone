#pragma strict
var animator: Animator;
var startPoint : Vector3;
var endPoint : Vector3;
var isWalking;
var speed = 3;


function Start () {
	animator = GetComponent(Animator);
	startPoint = transform.position;
	endPoint = transform.position;
	isWalking = false;
}

function Update () {
	//Movement
	if(Input.GetKey(KeyCode.RightArrow)){
		moveCharacter('right');
		setAnimation('walkRight');
	}
	else if(Input.GetKey(KeyCode.LeftArrow)){
		moveCharacter('left');
		setAnimation('walkLeft');
	}
	else if(Input.GetKey(KeyCode.UpArrow)){
		moveCharacter('up');
		setAnimation('walkUp');
	}
	else if(Input.GetKey(KeyCode.DownArrow)){
		moveCharacter('down');
		setAnimation('walkDown');
	}
	else if(!Input.anyKey){
		setAnimation('idle');
	}

}

function moveCharacter(direction){
	switch (direction){
		case 'left':
			startPoint = transform.position;
			endPoint = new Vector3(transform.position.x - speed, transform.position.y, transform.position.z);
			transform.position = Vector3.Lerp(startPoint, endPoint, Time.deltaTime);
		break;
		
		case 'right':
			startPoint = transform.position;
			endPoint = new Vector3(transform.position.x + speed, transform.position.y, transform.position.z);
			transform.position = Vector3.Lerp(startPoint, endPoint, Time.deltaTime);
		break;
		
		case 'up':
			startPoint = transform.position;
			endPoint = new Vector3(transform.position.x, transform.position.y + speed, transform.position.z);
			transform.position = Vector3.Lerp(startPoint, endPoint, Time.deltaTime);
		break;
		
		case 'down':
			startPoint = transform.position;
			endPoint = new Vector3(transform.position.x, transform.position.y - speed, transform.position.z);
			transform.position = Vector3.Lerp(startPoint, endPoint, Time.deltaTime);
		break;
	}
}

function setAnimation(animation){
	switch(animation){
		case 'walkLeft':
			setWalk(false, -1, 0);
		break;
		
		case 'walkRight':
			setWalk(false, 1, 0);
		break;
		
		case 'walkUp':
			setWalk(false, 0, 1);
		break;
		
		case 'walkDown':
			setWalk(false, 0, -1);
		break;
		
		case 'idle':
			setWalk(true, 0, 0);
		break;
	}
}

function setWalk(idle, x, y){
	animator.SetBool("idle", idle);
	animator.SetFloat("xWalkSpeed", x);
	animator.SetFloat("yWalkSpeed", y);
}