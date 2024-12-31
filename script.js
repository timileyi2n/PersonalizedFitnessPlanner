


function clicked(click) {
    // let weightLoss = document.querySelector('.weightLoss')
    // let muscleGain = document.querySelector('.muscleGain')
    // let generalFitness = document.querySelector('.generalFitness')
    if (click === 'weightLoss') {
        document.querySelector('.fitnessGoal').value = 'Weight Loss'
    }
    else if (click === 'muscleGain') {
        console.log(document.querySelector('.fitnessGoal').value = 'Muscle Gain')
    } else if (click === 'generalFitness') {
        document.querySelector('.fitnessGoal').value = 'General Fitness'
    }
    else if (click === 'beginner') {
        document.querySelector('.fitnessLevel').value = 'Beginner'
    }
    else if (click === 'Intermediate') {
        document.querySelector('.fitnessLevel').value = 'Intermediate'
    }
    else if (click === 'Advance') {
        document.querySelector('.fitnessLevel').value = 'Advance'
    }
}


function personalizedFitnessPlanner() {
    let fitnessGoal = document.querySelector('.fitnessGoal')
    fitnessGoals = fitnessGoal.value
    let fitnessLevel = document.querySelector('.fitnessLevel')
    fitnessLevels = fitnessLevel.value
    let input = document.querySelector('.age')
    let age = input.value
    let ages = Number(age)


    let text = ''
    if (fitnessGoals === 'Weight Loss' && fitnessLevels === 'Beginner' && ages >= 18) {
            text = ` <h2> Weekly Plans</h2>
            <p class="font">Monday: Light Cardio</p>
                    <p>1.   20–30 minutes brisk walking.</p>
                    <p>2.   5 minutes stretching.</p>
                <p class="font"> Tuesday: Full-Body Strength</p>
                    <p>1.  Squats, push-ups (knee push-ups if needed), glute bridges, and a 20s plank (2 sets, 10–12 reps).</p>
                                        <p class="font">Wednesday: Active Recovery</p>
                    <p>1.  Light yoga or 15–20 min slow walk. </p>
                                        <p class="font">Thursday: Interval Cardio</p>
                    <p>1.  2-min brisk walk, 1-min jog (repeat for 20 min).</p>
                                    <p class="font">Friday: Lower Body Strength</p>
                    <p>1. Step-ups, side lunges, calf raises, and 15s wall sits (2 sets, 10–12 reps). </p>
                                    <p class="font">Saturday: Stretch or Yoga</p>
                    <p>1. 20–30 minutes stretching or beginner yoga. </p>
                                    <p class="font"> Sunday: Long Walk</p>
                            <p>1. 40–60 minutes steady walking.</p>
                    <p>2. Stay consistent, hydrate well, and pair this with a balanced diet for best results.</p>
                    <p class="font">Tips:</p>
                    <p>1. Start Slow, Gradually increase intensity or duration weekly.</p>
                    <p>2. Consistency: Aim for daily movement, even on rest days.</p>
                    <p>3. Diet: Focus on a balanced diet with a calorie deficit for weight loss.</p>
                    `
    } else if (fitnessGoals === 'Weight Loss' && fitnessLevels === 'Intermediate' && ages >= 18) {
        text = `<h2> Weekly Plans</h2>
        <p class="font">Monday: HIIT Cardio</p>
                     <p>1.  5-min warm-up.</p>
                     <p>2.  30s sprint, 1-min jog (8–10 rounds).</p>
                     <p>3.  5-min cool-down and stretching.</p>
                    <p class="font">Tuesday: Upper Body Strength</p>
                      <p>1. Push-ups, dumbbell rows, shoulder presses, bicep curls (3 sets of 10–12 reps).</p>
                   <p>2.  Finish with a 30s plank (3 rounds).</p>
                  <p class="font">  Wednesday: Active Recovery</p>
                     <p>1.  Light yoga or a 20–30 min walk.</p>
                   <p class="font"> Thursday: Lower Body Strength</p>
                   <p>1. Squats, lunges, deadlifts, calf raises (3 sets of 10–12 reps).</p>
                   <p>2. Russian twists (20 reps per side, 3 sets).</p>
                   <p class="font"> Friday: Steady-State Cardio</p>
                   <p>1. 40–50 min moderate jog, cycling, or swimming.</p>
                    <p class="font">Saturday: Full-Body Circuit</p>
                   <p>1. Jump squats, push-ups, mountain climbers, thrusters, burpees (30s each, 3 rounds).</p>
                  <p class="font">  Sunday: Low-Intensity Cardio</p>
                   <p>1. 60–90 min brisk walking or hiking.</p>
                 <p>2.  Stay hydrated, maintain a calorie deficit, and prioritize protein and whole foods. Progress weekly by increasing intensity or resistance.<p>
                  <p class ="font"> Tips:</p>
                    <p>1. Stay hydrated and stretch after each session.</p>
                       <p>2. Pair with a healthy, calorie-controlled diet.</p>
                          <p>3. Gradually increase intensity weekly.</p>
                    `
    } else if (fitnessGoals === 'Weight Loss' && fitnessLevels === 'Advance' && ages >= 18) {
        text = `<h2> Weekly Plans</h2>
        <p class="font"> Monday: HIIT Cardio</p>
               <p>1. 30s sprint, 1-min jog (10–12 rounds).</p>
               <p>2.  Warm-up and cool-down: 5 minutes each.</p>
               <p class="font">  Tuesday: Upper Body Strength</p>
               <p>1. Bench press, pull-ups, shoulder press, tricep dips (3 sets, 8–10 reps).</p>
               <p>2. Plank holds (1 min, 3 rounds).</p>
               <p class="font">   Wednesday: Active Recovery</p>
               <p>1. Light yoga or 20–30 min walk/stretching.</p>
               <p class="font">  Thursday: Lower Body Strength</p>
              <p>1.  Squats, deadlifts, lunges, and Bulgarian split squats (3 sets, 8–10 reps).</p>
              <p>2.  Russian twists (20 reps per side, 3 sets).</p>
              <p class="font">  Friday: Steady-State Cardio</p>
              <p>1.  50–60 min jog, cycling, or swimming at a consistent pace.</p>
              <p class="font">  Saturday: Full-Body Circuit</p>
              <p>1.   Burpees, jump squats, mountain climbers, push-ups, and dumbbell thrusters (30s each, 4 rounds).</p>
              <p class="font">  Sunday: Long Cardio or Hiking</p>
              <p>1.  60–90 min hiking or low-intensity jogging.</p>
               <p class ="font"> Tips:</p>
                    <p>1. Stay hydrated and stretch after each session.</p>
                       <p>2. Pair with a healthy, calorie-controlled diet.</p>
                          <p>3. Gradually increase intensity weekly.</p>
                `
    } else if (fitnessGoals === 'Muscle Gain' && fitnessLevels === 'Beginner' && ages >= 18) {
        text = ` <h2> Weekly Plans</h2>
       <p class="font"> Monday: Upper Body Strength</p>
        <p>1. Push-ups, dumbbell rows, shoulder presses (2–3 sets of 10–12 reps).</p>
       <p class="font">   Tuesday: Lower Body Strength</p>
       <p>1.  Squats, lunges, calf raises (2–3 sets of 10–12 reps).</p>
       <p class="font">  Wednesday: Rest or Active Recovery</p>
       <p>1.  Light yoga or a 20–30 min walk.</p>
        <p class="font"> Thursday: Full-Body Strength</p>
        <p>1. Deadlifts, glute bridges, plank (2–3 sets of 10–12 reps).</p>
        <p class="font"> Friday: Cardio + Core</p>
        <p>1. 20–30 min light jog + sit-ups, Russian twists (3 sets of 15 reps).</p>
        <p class="font"> Saturday: Compound Movements</p>
        <p>1. Bench presses, pull-ups (assisted if needed), bodyweight squats (3 sets of 10–12 reps).</p>
       <p class="font">  Sunday: Rest or Recovery
       <p>1.  Stretching or 15–20 min light yoga.</p>
       <p class="font">Tips</p>
       <p>1. Progressive Overload: Gradually increase weights weekly.</p>
      <p>2.  Eat a calorie surplus with high protein intake.</p>
      <p>3.  Prioritize sleep and rest days for muscle repair</p>
             `
    } else if (fitnessGoals === 'Muscle Gain' && fitnessLevels === 'Intermediate' && ages >= 18) {
        text = `<h2> Weekly Plans</h2>
       <p class="font"> Monday: Upper Body (Push) </p>
      <p>1.  Bench press, shoulder press, tricep dips (3 sets of 8–12 reps each).<p/>
       <p class="font"> Tuesday: Lower Body </p>
        <p>1.  Squats, deadlifts, lunges, calf raises (3 sets of 8–12 reps each).<p/>
       <p class="font"> Wednesday: Rest or Active Recovery </p>
       <p>1.   Light stretching or yoga for 20–30 minutes.<p/>
       <p class="font"> Thursday: Upper Body (Pull) </p>
       <p>1.   Pull-ups, bent-over rows, bicep curls (3 sets of 8–12 reps each).<p/>
       <p class="font"> Friday: Full Body Strength </p>
       <p>1.   Deadlifts, bench press, squats (3 sets of 8–10 reps each).<p/>
      <p class="font">  Saturday: Core and Accessory Work </p>
       <p> 1.   Planks, hanging leg raises, and side planks (3 sets).<p/>
       <p>2.   Optional: Focus on weak areas (e.g., grip, mobility).<p/>
      <p class="font">  Sunday: Rest or Recovery </p>
      <p>1.  Light walk or foam rolling.<p/> 
        <p class="font">Tips</p>
       <p>1. Progressive Overload: Gradually increase weights weekly.</p>
      <p>2.  Diet: Eat a calorie surplus with high protein intake.</p>
      <p>3.  Recovery: Prioritize sleep and rest days for muscle repair</p>
             `
    } else if (fitnessGoals === 'Muscle Gain' && fitnessLevels === 'Advance' && ages >= 18) {
        text = `<h2> Weekly Plans</h2>
     <p class="font">       Monday: Chest & Triceps<p/>
     <p>1.  Bench press, incline dumbbell press, dips, tricep pushdowns (4 sets of 8–10 reps).<p/>
     <p class="font">   Tuesday: Back & Biceps<p/>
     <p> 1.  Deadlifts, pull-ups, barbell rows, bicep curls (4 sets of 8–10 reps).<p/>
      <p class="font">  Wednesday: Legs<p/>
      <p>1.  Squats, Romanian deadlifts, walking lunges, calf raises (4 sets of 8–12 reps).<p/>
     <p class="font">   Thursday: Rest or Active Recovery<p/>
     <p>1.   Light yoga or stretching.<p/>
     <p class="font">   Friday: Shoulders & Abs<p/>
     <p> 1.  Overhead press, lateral raises, face pulls, planks, ab rollouts (4 sets of 10–12 reps).<p/>
      <p class="font">  Saturday: Full-Body Compound Movements<p/>
      <p>1.  Clean and press, front squats, pull-ups, bench press (4 sets of 6–8 reps).<p/>
      <p class="font">  Sunday: Rest or Active Recovery<p/>
      <p>1.  Light swimming, yoga, or stretching.<p/>
        <p class="font">Tips</p>
       <p>1. Use progressive overload to increase intensity weekly..</p>
      <p>2. Eat a high-protein diet with a calorie surplus. </p>
      <p>3. Ensure 7–8 hours of sleep daily for recovery.</p>
          `
    } else if (fitnessGoals === 'General Fitness' && fitnessLevels === 'Beginner' && ages >= 18) {
        text = `<h2> Weekly Plans</h2>
     <p class="font"> Monday: Full-Body Strength</p>
     <p>1.   Squats, push-ups, glute bridges, plank (2 sets of 10–12 reps).</p>
      <p class="font">  Tuesday: Cardio</p>
      <p>1. 20–30 minutes brisk walking or light jogging.</p>
      <p class="font">  Wednesday: Rest or Active Recovery</p>
     <p> 1.  Light yoga or a 20–30 min walk.</p>
     <p class="font">   Thursday: Upper Body Strength
     <p>1.   Dumbbell rows, shoulder presses, bicep curls, tricep dips (2 sets of 10–12 reps).</p>
     <p class="font">   Friday: Cardio + Core</p>
     <p>1.   20–30 min cycling or swimming + sit-ups, Russian twists (3 sets of 15 reps).</p>
     <p class="font">   Saturday: Lower Body Strength</p>
     <p>1.   Lunges, calf raises, bodyweight squats (2 sets of 10–12 reps).</p>
     <p class="font">   Sunday: Rest or Light Activity</p>
     <p>1.   Stretching, walking, or yoga.</p>
    <p class="font">Tips</p>
       <p>1. Stay consistent and increase intensity gradually.</p>
      <p>2. Focus on balanced nutrition and proper hydration.</p>
      <p>3. Prioritize rest for muscle recovery.</p>
          `
    } else if (fitnessGoals === 'General Fitness' && fitnessLevels === 'Intermediate' && ages >= 18) {
        text = `<h2> Weekly Plans</h2>
     <p class="font"> Monday: Full-Body Strength</p>
     <p>1.   Squats, push-ups, dumbbell rows, planks (3 sets of 10–12 reps).</p>
      <p class="font">  Tuesday: Cardio + Core</p>
     <p>1.  30–40 min steady-state cardio (jog, bike) + sit-ups, Russian twists (3 sets of 15 reps).</p>
     <p class="font">   Wednesday: Active Recovery</p>
    <p>1.    Light yoga or 20–30 min walk.</p>
     <p class="font">   Thursday: Upper Body Strength</p>
     <p>1.  Bench press, shoulder press, pull-ups (3 sets of 10–12 reps).</p>
     <p class="font">   Friday: Lower Body Strength</p>
     <p>1.  Lunges, deadlifts, calf raises (3 sets of 10–12 reps).</p>
      <p class="font">  Saturday: HIIT Workout</p>
     <p>1.  20–30 min HIIT (burpees, jump squats, mountain climbers, high knees) – 30s work, 30s rest.</p>
     <p class="font">   Sunday: Rest or Stretching</p>
      <p> 1. Light stretching or yoga for 20 minutes.</p>
<p class="font">Tips</p>
       <p>1. Stay consistent and increase intensity gradually.</p>
      <p>2. Focus on balanced nutrition and proper hydration.</p>
      <p>3. Prioritize rest for muscle recovery.</p>
          `
    }
    else if (fitnessGoals === 'General Fitness' && fitnessLevels === 'Advance' && ages >= 18) {
        text = `<h2> Weekly Plans</h2>
     <p class="font">  Monday: Full-Body Strength</p>
     <p>1.  Squats, deadlifts, bench press, pull-ups, shoulder press (4 sets of 6–8 reps).</p>
     <p class="font">   Tuesday: HIIT Cardio & Core</p>
     <p>1.   30-min HIIT (sprints, burpees, jump squats) + planks, leg raises (3 sets of 30s each).</p>
     <p class="font">   Wednesday: Lower Body Strength</p>
     <p>1.   Lunges, Romanian deadlifts, Bulgarian split squats, calf raises (4 sets of 8–10 reps).</p>
     <p class="font">   Thursday: Active Recovery</p>
     <p>1.  Light yoga, stretching, or a 30-min walk.</p>
     <p class="font">   Friday: Upper Body Strength</p>
     <p>1.   Incline bench press, dumbbell rows, shoulder press, bicep curls, tricep dips (4 sets of 8–10 reps).</p>
     <p class="font">   Saturday: Circuit Training</p>
     <p>1.   Jump squats, push-ups, mountain climbers, kettlebell swings, burpees (4 rounds, 30s each).</p>
     <p class="font">   Sunday: Rest or Active Recovery</p>
     <p>1.  Light swimming, yoga, or foam rolling.</p>
     <p class="font">Tips</p>
       <p>1. Use progressive overload to increase intensity weekly..</p>
      <p>2. Eat a high-protein diet with a calorie surplus. </p>
      <p>3. Ensure 7–8 hours of sleep daily for recovery.</p>
          `
    }
    else if (fitnessGoals !== "Weight Loss" && fitnessGoals !== "Muscle Gain" && fitnessGoals !== "General Fitness") {
        text = `Invalid goal. Please select from Weight Loss, Muscle Gain, or General Fitness. `;
    } else if (fitnessLevels !== "Beginner" && fitnessLevels !== "Intermediate" && fitnessLevels !== "Advance") {
        text = `Invalid Level. Please select from Beginner, Intermidiate, or Advance. `;
    }
    else {
        text = 'Invalid'
    }

    if (!fitnessGoals || !fitnessLevels || !ages) {
        return
    }
    document.querySelector('.display').innerHTML = text;
    fitnessGoal.value = ""
    fitnessLevel.value = ""
    input.value = ""
}