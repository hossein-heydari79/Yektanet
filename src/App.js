import './App.css';
import data from './assets/data/data.json'

function App() {
  return (
    <div className="App">

      <div className="header">
        <div className="filter-item">
          <label htmlFor="label-filed">فیلد</label>
          <input type="text" id="label-filed" />
        </div>

        <div className="filter-item">
          <label htmlFor="label-ads">نام آگهی</label>
          <input type="text" id="label-ads" />
        </div>

        <div className="filter-item">
          <label htmlFor="label-date">تاریخ</label>
          <input type="text" id="label-date" />
        </div>

        <div className="filter-item">
          <label htmlFor="label-change">نام تغییر دهنده</label>
          <input type="text" id="label-change" />
        </div>
      </div>

      <div className="main">
        <table>
          <thead>
            <tr>
              <th>مقدار جدید</th>
              <th>مقدار قدیمی</th>
              <th>فیلد</th>
              <th>نام آگهی</th>
              <th>تاریخ</th>
              <th>نام تغییر دهنده</th>
            </tr>
          </thead>

          <tbody>
            {
              data.map((item, index) => {
                if (index < 50) {
                  return (
                    <tr key={item.id}>
                      <td>{item.new_value}</td>
                      <td>{item.old_value}</td>
                      <td>{item.field}</td>
                      <td>{item.title}</td>
                      <td>{item.date}</td>
                      <td>{item.name}</td>
                    </tr>
                  )
                }
                else {
                  return
                }
              })
            }
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default App;
