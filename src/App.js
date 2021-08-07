import './App.css';

function App() {
  return (
    <div className="App">

      <div className="header">
        <div className="inputs">
          <label htmlFor="label-filed">فیلد</label>
          <input type="text" id="label-filed" />
        </div>

        <div className="inputs">
          <label htmlFor="label-ads">نام آگهی</label>
          <input type="text" id="label-ads" />
        </div>

        <div className="inputs">
          <label htmlFor="label-date">تاریخ</label>
          <input type="text" id="label-date" />
        </div>

        <div className="inputs">
          <label htmlFor="label-change">نام تغییر دهنده</label>
          <input type="text" id="label-change" />
        </div>
      </div>

    </div>
  );
}

export default App;
