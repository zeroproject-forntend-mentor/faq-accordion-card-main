const faqList = document.getElementById('faq-list');
const asksAnswers = document.querySelectorAll('.ask__answer');
const asksQuestions = document.querySelectorAll('.ask__question');

const removeClass = (target, sibiling) => {
  asksAnswers.forEach((item, idx) => {
    item.classList.remove('ask__answer--show');
    asksQuestions[idx].classList.remove('ask__question--show');
  });

  target.classList.add('ask__question--show');
  sibiling.classList.add('ask__answer--show');
};

faqList.addEventListener('click', (e) => {
  const item = e.target;
  if (item.classList.contains('ask__question--show')) {
    item.classList.remove('ask__question--show');
    item.nextElementSibling.classList.remove('ask__answer--show');
  } else if (item.classList.contains('ask__question')) {
    removeClass(item, item.nextElementSibling);
  }
});
