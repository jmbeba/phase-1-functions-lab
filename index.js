// Code your solution in this file!
function distanceFromHqInBlocks(loc){
    if(loc > 42){
        return loc - 42;
    }else{
        return 42 - loc;
    }
}

function distanceFromHqInFeet(loc){
    return distanceFromHqInBlocks(loc) * 264;
}

function distanceTravelledInFeet(start, des){
    let dis;
    if(start > des){
        dis = start - des;
    }else{
        dis = des - start;
    }

    return dis * 264;
}

function calculatesFarePrice(start, destination){
    let dis;

    if(start > destination){
        dis = start - destination;
    }else{
        dis = destination - start;
    }

    let disFeet = dis * 264;

    if(disFeet <= 400){
        return disFeet * 0;
    }else if(disFeet > 400 && disFeet <= 2000){
        disFeet-=400;
        return disFeet * 0.02;
    }else if(disFeet > 2000 && disFeet <= 2500){
        disFeet-=400;
        return 25;
    }else{
        return "cannot travel that far";
    }
}
