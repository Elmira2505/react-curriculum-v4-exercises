//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const myName = 'Elmira ';
  const agesExperience = 6;
  const myHobbies = [
    'React development',
    'Learning JavaScript',
    'UI/UX design',
    'Hiking',
    'Painting',
  ];

  return (
    <div>
      {/* add JSX here 
      <p> Student output will go here </p>
      */}
      <h1> Hi! My name is {myName}. </h1>
      <h2> About Me</h2>
      <p>
        I am a Full-Stack Developer with experience {agesExperience}years, who
        enjoys creating responsive, accessible, and efficient web applications.
        I like working across the entire development process—from designing
        intuitive user interfaces to building reliable backend services and
        APIs. I am always exploring new technologies and best practices to write
        clean, maintainable code.
      </p>
      <h2> My Hobbies</h2>
      <ul>
        {myHobbies.map((el) => {
          return <li key={el}> {el} </li>;
        })}
      </ul>
    </div>
  );
}
