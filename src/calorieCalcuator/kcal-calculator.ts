function checksum():boolean {
    let inputSleep,inHoursSitting,inHoursSitLow,inHoursWalk,inHoursSitWalk,inHoursWork : number;
    inputSleep = parseFloat((<HTMLInputElement>document.getElementById("inHoursSleep")).value);
    inputSleep = isNaN(inputSleep) ? 0 : inputSleep;

    inHoursSitting = parseFloat((<HTMLInputElement>document.getElementById("inHoursSitting")).value);
    inHoursSitting = isNaN(inHoursSitting) ? 0 : inHoursSitting;

    inHoursSitLow = parseFloat((<HTMLInputElement>document.getElementById("inHoursSitLow")).value);
    inHoursSitLow = isNaN(inHoursSitLow) ? 0 : inHoursSitLow;

    inHoursSitWalk = parseFloat((<HTMLInputElement>document.getElementById("inHoursSitWalk")).value);
    inHoursSitWalk = isNaN(inHoursSitWalk) ? 0 : inHoursSitWalk;

    inHoursWalk = parseFloat((<HTMLInputElement>document.getElementById("inHoursWalk")).value);
    inHoursWalk = isNaN(inHoursWalk) ? 0 : inHoursWalk;

    inHoursWork = parseFloat((<HTMLInputElement>document.getElementById("inHoursWork")).value);
    inHoursWork = isNaN(inHoursWork) ? 0 : inHoursWork;
    let summe = inputSleep + inHoursSitting + inHoursSitLow + inHoursWalk + inHoursSitWalk + inHoursWork;
    if (summe != 24.0) {
        document.getElementById("lbError").innerHTML = "Sum of hours per day must be 24! Current sum is "+summe+"!";
        document.getElementById("lbError").style.color = "red";
        return false;
    } else {
        document.getElementById("lbError").innerHTML = "Sum of hours is 24 - all good!";
        document.getElementById("lbError").style.color = "green";
        return true;
    }
}

function calculateEnergyConsumption() {
    // Read Hour Activity
    let inputSleep,inHoursSitting,inHoursSitLow,inHoursWalk,inHoursSitWalk,inHoursWork : number;
    inputSleep = parseFloat((<HTMLInputElement>document.getElementById("inHoursSleep")).value);
    inputSleep = isNaN(inputSleep) ? 0 : inputSleep;

    inHoursSitting = parseFloat((<HTMLInputElement>document.getElementById("inHoursSitting")).value);
    inHoursSitting = isNaN(inHoursSitting) ? 0 : inHoursSitting;

    inHoursSitLow = parseFloat((<HTMLInputElement>document.getElementById("inHoursSitLow")).value);
    inHoursSitLow = isNaN(inHoursSitLow) ? 0 : inHoursSitLow;

    inHoursSitWalk = parseFloat((<HTMLInputElement>document.getElementById("inHoursSitWalk")).value);
    inHoursSitWalk = isNaN(inHoursSitWalk) ? 0 : inHoursSitWalk;

    inHoursWalk = parseFloat((<HTMLInputElement>document.getElementById("inHoursWalk")).value);
    inHoursWalk = isNaN(inHoursWalk) ? 0 : inHoursWalk;

    inHoursWork = parseFloat((<HTMLInputElement>document.getElementById("inHoursWork")).value);
    inHoursWork = isNaN(inHoursWork) ? 0 : inHoursWork;
    let summe = inputSleep + inHoursSitting + inHoursSitLow + inHoursWalk + inHoursSitWalk + inHoursWork;
    let palFactor = (inputSleep*0.95+inHoursSitting*1.2+inHoursSitLow*1.5+inHoursSitWalk*1.7+inHoursWalk*1.9+inHoursWork*2.4)/(summe);

    let gender = (<HTMLSelectElement>document.getElementById("selGender")).value;

    let weight, height, energyConsumption = 0, age;

    weight = parseFloat((<HTMLInputElement>document.getElementById("inWeight")).value);
    if (isNaN(weight) || (weight <0)) {
        alert("Weight must not be empty and a valid positive number!");
        return;
    }

    height = parseFloat((<HTMLInputElement>document.getElementById("inHeight")).value);
    if (isNaN(height)|| (height <0)) {
        alert("Height must not be empty and a valid positive number!");
        return;
    }
    age = parseFloat((<HTMLInputElement>document.getElementById("inAge")).value);
    if (isNaN(age)|| (age <0)) {
        alert("Age must not be empty and a valid positive number!");
        return;
    }

    if (gender=="1") {
        energyConsumption = 655.1 + 9.6 *weight + 1.8 * height - 4.7 * age;
    } else {
        energyConsumption = 66.47+13.7*weight+5*height-6.8*age;
    }
    (<HTMLInputElement>document.getElementById("inEnergy")).value= energyConsumption.toFixed().toString();
}
