import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [view, setView] = useState('home');
  
  // авторизація викладача
  const [lecturerPassword, setLecturerPassword] = useState('');
  const [lecturerError, setLecturerError] = useState('');

  // авторизація студента 
  const [studentNameInput, setStudentNameInput] = useState('');
  const [studentPasswordInput, setStudentPasswordInput] = useState('');
  const [studentError, setStudentError] = useState('');
  
  // авторизований студент
  const [activeStudentId, setActiveStudentId] = useState(1);

  //  дисципліни
  const [subjects] = useState([
    { id: 1, name: 'Розробник фронтенду програмних систем' },
    { id: 2, name: 'Мультиплатформне програмування' },
    { id: 3, name: 'Захист програм і даних' },
    { id: 4, name: 'Операційні системи' },
    { id: 5, name: 'Сучасні технології системного програмування' }
  ]);

  const [selectedSubjectId, setSelectedSubjectId] = useState(1);

  // база даних 
  const [databook, setDatabook] = useState({
    1: [
      { id: 1, name: 'Нестерова Марія', group: 'ІПЗ-33', labs: [10, 14, 0, 0, 0] },
      { id: 2, name: 'Гайдай Дмитро', group: 'ІПЗ-33', labs: [7, 15, 10, 0, 0] },
      { id: 3, name: 'Конько Валерій', group: 'ІПЗ-33', labs: [9, 15, 0, 0, 0] },
      { id: 4, name: 'Рудник Микита', group: 'ІПЗ-32', labs: [8, 13, 8, 15, 0] },
      { id: 5, name: 'Чередніченко Вероніка', group: 'ІПЗ-31', labs: [0, 0, 0, 0, 0] },
      { id: 6, name: 'Максименко Дарина', group: 'ІПЗ-31', labs: [10, 15, 0, 0, 0] },
      { id: 7, name: 'Мирошниченко Павло', group: 'ІПЗ-31', labs: [7, 10, 8, 0, 0] },
      { id: 8, name: 'Венгар Анна', group: 'ІПЗ-32', labs: [9, 14, 0, 0, 0] },
      { id: 9, name: 'Чадюк Данило', group: 'ІПЗ-32', labs: [10, 13, 8, 0, 0] },
      { id: 10, name: 'Кравець Сергій', group: 'ІПЗ-33', labs: [10, 15, 0, 0, 0] }
    ], 
    2: [
      { id: 1, name: 'Нестерова Марія', group: 'ІПЗ-33', labs: [6, 13, 9, 15, 0] },
      { id: 2, name: 'Гайдай Дмитро', group: 'ІПЗ-33', labs: [9, 11, 8, 13, 0] },
      { id: 3, name: 'Конько Валерій', group: 'ІПЗ-33', labs: [10, 12, 0, 0, 0] },
      { id: 4, name: 'Рудник Микита', group: 'ІПЗ-32', labs: [5, 10, 7, 0, 0] },
      { id: 5, name: 'Чередніченко Вероніка', group: 'ІПЗ-31', labs: [7, 15, 0, 0, 0] },
      { id: 6, name: 'Максименко Дарина', group: 'ІПЗ-31', labs: [7, 10, 8, 12, 0] },
      { id: 7, name: 'Мирошниченко Павло', group: 'ІПЗ-31', labs: [10, 9, 8, 11, 0] },
      { id: 8, name: 'Венгар Анна', group: 'ІПЗ-32', labs: [9, 14, 9, 0, 0] },
      { id: 9, name: 'Чадюк Данило', group: 'ІПЗ-32', labs: [10, 13, 8, 15, 0] },
      { id: 10, name: 'Кравець Сергій', group: 'ІПЗ-33', labs: [10, 15, 0, 0, 0] }
    ], 
    3: [
      { id: 1, name: 'Нестерова Марія', group: 'ІПЗ-33', labs: [10, 14, 9, 15, 15] },
      { id: 2, name: 'Гайдай Дмитро', group: 'ІПЗ-33', labs: [7, 15, 10, 0, 0] },
      { id: 3, name: 'Конько Валерій', group: 'ІПЗ-33', labs: [9, 13, 10, 13, 17] },
      { id: 4, name: 'Рудник Микита', group: 'ІПЗ-32', labs: [0, 0, 0, 0, 0] },
      { id: 5, name: 'Чередніченко Вероніка', group: 'ІПЗ-31', labs: [9, 12, 7, 7, 0] },
      { id: 6, name: 'Максименко Дарина', group: 'ІПЗ-31', labs: [10, 13, 9, 0, 0] },
      { id: 7, name: 'Мирошниченко Павло', group: 'ІПЗ-31', labs: [7, 10, 8, 0, 0] },
      { id: 8, name: 'Венгар Анна', group: 'ІПЗ-32', labs: [9, 14, 9, 0, 0] },
      { id: 9, name: 'Чадюк Данило', group: 'ІПЗ-32', labs: [10, 12, 8, 0, 0] },
      { id: 10, name: 'Кравець Сергій', group: 'ІПЗ-33', labs: [0, 0, 0, 0, 0] }
    ],
    4: [
      { id: 1, name: 'Нестерова Марія', group: 'ІПЗ-33', labs: [11, 14, 10, 0, 0] },
      { id: 2, name: 'Гайдай Дмитро', group: 'ІПЗ-33', labs: [13, 15, 10, 12, 0] },
      { id: 3, name: 'Конько Валерій', group: 'ІПЗ-33', labs: [9, 13, 10, 5, 0] },
      { id: 4, name: 'Рудник Микита', group: 'ІПЗ-32', labs: [8, 13, 8, 15, 0] },
      { id: 5, name: 'Чередніченко Вероніка', group: 'ІПЗ-31', labs: [10, 15, 0, 0, 0] },
      { id: 6, name: 'Максименко Дарина', group: 'ІПЗ-31', labs: [9, 15, 9, 14, 0] },
      { id: 7, name: 'Мирошниченко Павло', group: 'ІПЗ-31', labs: [7, 10, 7, 0, 0] },
      { id: 8, name: 'Венгар Анна', group: 'ІПЗ-32', labs: [9, 14, 9, 0, 0] },
      { id: 9, name: 'Чадюк Данило', group: 'ІПЗ-32', labs: [13, 12, 8, 11, 0] },
      { id: 10, name: 'Кравець Сергій', group: 'ІПЗ-33', labs: [10, 0, 0, 0, 0] }
    ], 
    5: [
      { id: 1, name: 'Нестерова Марія', group: 'ІПЗ-33', labs: [10, 14, 10, 0, 0] },
      { id: 2, name: 'Гайдай Дмитро', group: 'ІПЗ-33', labs: [7, 15, 10, 12, 0] },
      { id: 3, name: 'Конько Валерій', group: 'ІПЗ-33', labs: [9, 15, 10, 15, 0] },
      { id: 4, name: 'Рудник Микита', group: 'ІПЗ-32', labs: [8, 13, 8, 0, 0] },
      { id: 5, name: 'Чередніченко Вероніка', group: 'ІПЗ-31', labs: [10, 0, 0, 0, 0] },
      { id: 6, name: 'Максименко Дарина', group: 'ІПЗ-31', labs: [10, 15, 9, 0, 0] },
      { id: 7, name: 'Мирошниченко Павло', group: 'ІПЗ-31', labs: [7, 10, 8, 11, 14] },
      { id: 8, name: 'Венгар Анна', group: 'ІПЗ-32', labs: [9, 14, 9, 15, 0] },
      { id: 9, name: 'Чадюк Данило', group: 'ІПЗ-32', labs: [10, 13, 8, 0, 0] },
      { id: 10, name: 'Кравець Сергій', group: 'ІПЗ-33', labs: [10, 15, 0, 1, 0] }
    ]
  });
  
  // редагування балів (викладач)
  const [editStudentId, setEditStudentId] = useState(null);
  const [editLabIndex, setEditLabIndex] = useState(null);
  const [nextMark, setNextMark] = useState('');
  
  function saveMark(studentId, labIndex) {
    const currentList = databook[selectedSubjectId]; 
    const updatedList = currentList.map(student => {
      if (student.id === studentId) {
        const newLabs = [...student.labs];
        newLabs[labIndex] = Number(nextMark);
        return { ...student, labs: newLabs };
      }
      return student;
    });
    setDatabook({
      ...databook,
      [selectedSubjectId]: updatedList
    });
    setEditStudentId(null);
    setEditLabIndex(null);
  }

  // перевірка входу викладача
  function lecturerLogin(e) {
    e.preventDefault();
    if (lecturerPassword === '1234') {
      setView('lecturer-cabinet');
      setLecturerError('');
    } else {
      setLecturerError('Невірний пароль викладача!');
    }
  }

  // перевірка входу студента 
  function studentLogin(e) {
    e.preventDefault();
    const studentsList = databook[1];
    const foundStudent = studentsList.find(st => 
      st.name.toLowerCase().includes(studentNameInput.toLowerCase().trim())
    );

    if (foundStudent && studentPasswordInput === '1234') {
      setActiveStudentId(foundStudent.id);
      setView('student-cabinet');
      setStudentError('');
    } else {
      setStudentError('Невірне ПІБ або пароль!');
    }
  }

  // дані даного активного студента
  const currentStudentList = databook[selectedSubjectId] || [];
  const activeStudent = currentStudentList.find(s => s.id === activeStudentId) || currentStudentList[0];
  
  const studentSum = activeStudent.labs.reduce((a, b) => a + b, 0);
  const studentPercent = Math.round((activeStudent.labs.filter(m => m > 0).length / 5) * 100);
  const completedCount = activeStudent.labs.filter(m => m > 0).length;
  const debtCount = activeStudent.labs.filter(m => m === 0).length;

  //  перша сторінка
  if (view === 'home') {
    return (
      <div className="home-container">
        <h1 className="home-title">Адаптивна вебплатформа для моніторингу та оцінювання академічної успішності здобувачів вищої освіти</h1>
        <p style={{ marginBottom: '30px', fontSize: '18px', opacity: 0.9 }}>Оберіть профіль для входу в систему:</p>
        <div className="role-cards">
          <button className="role-card" onClick={() => setView('student-login')}>
             Кабінет здобувача
          </button>
          <button className="role-card" onClick={() => setView('lecturer-login')}>
            Кабінет викладача
          </button>
        </div>
      </div>
    );
  }

  // вхід студента
  if (view === 'student-login') {
    return (
      <div className="main-container">
        <button className="back-btn" onClick={() => setView('home')}>На головну</button>
        <div className="auth-card">
          <h3> Авторизація здобувача</h3>
          <p>Введіть Ваші дані для доступу до кабінету:</p>
          <form onSubmit={studentLogin}>
            <div style={{ textAlign: 'left', marginBottom: '12px' }}>
              <label style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Ваше ПІБ:</label>
              <input 
                type="text" 
                placeholder="Прізвище Ім'я" 
                value={studentNameInput} 
                onChange={(e) => setStudentNameInput(e.target.value)}
                className="auth-input"
                style={{ marginTop: '5px' }}
                required
              />
            </div>

            <div style={{ textAlign: 'left', marginBottom: '15px' }}>
              <label style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Пароль доступу:</label>
              <input 
                type="password" 
                placeholder="Пароль" 
                value={studentPasswordInput} 
                onChange={(e) => setStudentPasswordInput(e.target.value)}
                className="auth-input"
                style={{ marginTop: '5px' }}
                required
              /> 
            </div>

            <button type="submit" className="action-btn" style={{ width: '100%', padding: '12px' }}>Увійти</button>
          </form>
          {studentError && <p className="error-text">{studentError}</p>}
        </div>
      </div>
    );
  }

  //вхід викладача
  if (view === 'lecturer-login') {
    return (
      <div className="main-container">
        <button className="back-btn" onClick={() => setView('home')}>На головну</button>
        <div className="auth-card">
          <h3>Авторизація викладача</h3>
          <p>Введіть пароль доступу до відомості:</p>
          <form onSubmit={lecturerLogin}>
            <input 
              type="password" 
              placeholder="Пароль" 
              value={lecturerPassword} 
              onChange={(e) => setLecturerPassword(e.target.value)}
              className="auth-input"
              autoFocus
            /> 
            <button type="submit" className="action-btn" style={{ width: '100%', padding: '12px' }}>Увійти</button>
          </form>
          {lecturerError && <p className="error-text">{lecturerError}</p>}
        </div>
      </div>
    );
  }

  return (
    <div> 
      <header className="header">
        <div className="logo_container">
          <h1>Адаптивна платформа моніторингу успішності</h1>
        </div>
        <button className="back-btn" onClick={() => { setView('home'); setLecturerPassword(''); setStudentPasswordInput(''); }}>
          Вийти на головну
        </button>
      </header>

      <main className="main-container">
        {/* кабінет здобувача*/}
        {view === 'student-cabinet' && (
          <section>
            <h2>Кабінет здобувача: {activeStudent.name} ({activeStudent.group})</h2>
            <p>Оберіть дисципліну для перегляду успішності:</p>

            <div className="subjects-container">
              {subjects.map(subj => (
                <button 
                  key={subj.id} 
                  onClick={() => setSelectedSubjectId(subj.id)}
                  className={selectedSubjectId === subj.id ? 'subject-btn active' : 'subject-btn'}
                >
                  {subj.name}
                </button>
              ))}
            </div>

            <div className="card-box">
              <h3>Дисципліна: {subjects.find(s => s.id === selectedSubjectId)?.name}</h3>
              <p>Загальний бал: <b>{studentSum} / 60 балів</b></p>
              
              {/* діаграма */}
              <div style={{ margin: '20px 0', background: '#f1f5f9', padding: '15px', borderRadius: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span><b>Діаграма виконання робіт:</b></span>
                  <span><b>{studentPercent}% здано</b></span>
                </div>
                
                <div className="progress-bar-container">
                  <div className="progress-bar-fill" style={{ width: `${studentPercent}%` }}></div>
                </div>

                <div style={{ display: 'flex', gap: '20px', fontSize: '14px', marginTop: '10px', flexWrap: 'wrap' }}>
                  <span style={{ color: '#10b981', fontWeight: '500' }}>
                    ✅ Здано: {completedCount} з 5
                  </span>
                  <span style={{ color: '#ef4444', fontWeight: '500' }}>
                    ❌ Не здано: {debtCount} з 5
                  </span>
                </div>
              </div>

              <h4 style={{ marginTop: '25px' }}>Оцінки за лабораторні роботи:</h4>
              <div className="table-responsive">
                <table className="grade-table">
                  <thead>
                    <tr>
                      <th>№ лабораторної роботи</th>
                      <th>Бали</th>
                      <th>Статус</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeStudent.labs.map((mark, idx) => (
                      <tr key={idx}>
                        <td><b>Лабораторна робота №{idx + 1}</b></td>
                        <td><b>{mark} б.</b></td>
                        <td>{mark > 0 ? '✅ Здано' : '❌ Не здано'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* кабінет викладача*/}
        {view === 'lecturer-cabinet' && (
          <section>
            <h2>Кабінет викладача</h2>
            <p>Оберіть дисципліну для перегляду та редагування відомості:</p>
            
            <div className="subjects-container">
              {subjects.map(subj => (
                <button 
                  key={subj.id} 
                  onClick={() => setSelectedSubjectId(subj.id)}
                  className={selectedSubjectId === subj.id ? 'subject-btn active' : 'subject-btn'}
                >
                  {subj.name}
                </button>
              ))}
            </div>

            <h3>Академічна відомість: {subjects.find(s => s.id === selectedSubjectId)?.name}</h3>
            
            <div className="table-responsive">
              <table className="grade-table">
                <thead>
                  <tr>
                    <th>ПІБ студента</th>
                    <th>Група</th>
                    <th>ЛP 1</th>
                    <th>ЛP 2</th>
                    <th>ЛP 3</th>
                    <th>ЛP 4</th>
                    <th>ЛP 5</th>
                    <th>Сума</th>
                    <th>Редагування</th>
                  </tr>
                </thead>
                <tbody>
                  {(databook[selectedSubjectId] || []).map(student => {
                    const sum = student.labs.reduce((a, b) => a + b, 0);
                    return (
                      <tr key={student.id}>
                        <td><b>{student.name}</b></td>
                        <td>{student.group}</td>
                        {student.labs.map((mark, labIndex) => {
                          const isEditing = editStudentId === student.id && editLabIndex === labIndex;
                          return (
                            <td key={labIndex}>
                              {isEditing ? (
                                <input 
                                  type="number" 
                                  defaultValue={mark} 
                                  onChange={(e) => setNextMark(e.target.value)}
                                  className="mark-input"
                                  autoFocus
                                />
                              ) : (
                                <span>{mark}</span>
                              )}
                            </td>
                          );
                        })}
                        <td><b>{sum}</b></td>
                        <td>
                          {editStudentId === student.id ? (
                            <button 
                              onClick={() => saveMark(student.id, editLabIndex)}
                              className="action-btn"
                              style={{ backgroundColor: '#10b981' }}
                            >
                              Зберегти
                            </button>
                          ) : (
                            <div style={{ display: 'flex', gap: '4px', justifyContent: 'center', flexWrap: 'wrap' }}>
                              {student.labs.map((_, lIdx) => (
                                <button 
                                  key={lIdx}
                                  onClick={() => {
                                    setEditStudentId(student.id);
                                    setEditLabIndex(lIdx);
                                    setNextMark(student.labs[lIdx]);
                                  }}
                                  className="action-btn"
                                  style={{ fontSize: '11px', padding: '4px 6px' }}
                                >
                                  ЛР{lIdx + 1}
                                </button>
                              ))}
                            </div>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}