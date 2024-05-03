/*
  This file is not being used, but I'll still go through it.

  Changes in this file, StartingScreen.jsx:
    - From regular function syntax to arrow function syntax.
    - Moved styles.css import to App.jsx.

  Things that should be fixed:
    - Inconsistent naming convention compared with other files, should be named
    Diary.jsx for consistency.
*/

const Diary = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is my first diary.</h1>

        <header className="Blink">
          <h6>Press any key to continue...</h6>
        </header>
      </header>
    </div>
  );
};

export default Diary;
