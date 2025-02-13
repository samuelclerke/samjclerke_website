document.addEventListener('DOMContentLoaded', () => {
  const about_sect = document.querySelector('section[data-group="about_me_group"]');
  const project_sect = document.querySelector('section[data-group="projects_group"]');
  const contact_sect = document.querySelector('section[data-group="contact_group"]');
  const about_button = document.getElementById('about');
  const project_button = document.getElementById('projects');
  const contact_button = document.getElementById('contact');

  about_sect.style.display = 'block';
  project_sect.style.display = 'none';
  contact_sect.style.display = 'none';

  document.getElementById('about').onclick = () => {
    about_sect.style.display = 'block';
    about_button.classList.replace('standard', 'pressed');
    project_sect.style.display = 'none';
    project_button.classList.replace('pressed', 'standard');
    contact_sect.style.display = 'none';
    contact_button.classList.replace('pressed', 'standard');
  }

  document.getElementById('projects').onclick = () => {
    about_sect.style.display = 'none';
    about_button.classList.replace('pressed', 'standard');
    project_sect.style.display = 'flex';
    project_button.classList.replace('standard', 'pressed');
    contact_sect.style.display = 'none';
    contact_button.classList.replace('pressed', 'standard');
  }

  document.getElementById('contact').onclick = () => {
    about_sect.style.display = 'none';
    about_button.classList.replace('pressed', 'standard');
    project_sect.style.display = 'none';
    project_button.classList.replace('pressed', 'standard');
    contact_sect.style.display = 'block';
    contact_button.classList.replace('standard', 'pressed');
  }
});
