import EmployeeList from "./components/EmployeeList";
import EmployeeContextProvider from './contexts/EmployeeContext';

const App = () => {
  return (
          <div>
            <div className="App">
              <div className="container">
                <div className="table-responsive">
                  <div className="table-wrapper">
                    <EmployeeContextProvider>
                        <EmployeeList />
                    </EmployeeContextProvider>
                  </div>
                </div>
              </div>
            </div>
         </div>
  )
}

export default App