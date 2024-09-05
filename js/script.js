// Función para llenar la información
function fillInformation() {
    document.getElementById('name').textContent = 'Jonhattan Roncancio';
    document.getElementById('direction').textContent = 'Calle 1d #1a-13 - Arbelaez - Cundinamarca';
    document.getElementById('email').textContent = 'jonhattanroncancio@email.com';
    document.getElementById('phone').textContent = '3114699926';
    document.getElementById('objective').textContent = 'Añadir conocimientos a mi carrera profesional, los cuales puesdan ser brindados en la empresa donde laboro como un plus y asi ser un profesional integro donde pueda brindar mis conocimientos en diferentes campos.';

    const experienceList = document.getElementById('experience-list');
    const experiences = ['Software development (2019 - 2020)', 'Consultor (2020-2021)', 'Profesional ODS (2021 - 2022)', 'Consultor Especialista Datastage (2022 - En Curso)'];
    experiences.forEach(exp => {
        const li = document.createElement('li');
        li.textContent = exp;
        experienceList.appendChild(li);
    });

    const responsibilitiesList = document.getElementById('responsibilities-list');
    const responsibilities = ['Desarrollar ETLs con la herramienta IBM InfoSphere DataStage.', 'Soporte de desarrollos en la herramienta IBM InfoSphere DataStage', 'Gestión Crear, Consultar, actualizar, alterar y eliminar tablas y registros de bases de datos ORACLE. proyectos', 'Ejecuciones de XML y Shells creadas por los desarrollos por medio de comando UNIX.', 'Soporte y monitoreo de las ejecuciones de los desarrollos en IBM InfoSphere DataStage, XML y Shells en Producción'];
    responsibilities.forEach(resp => {
        const li = document.createElement('li');
        li.textContent = resp;
        responsibilitiesList.appendChild(li);
    });

    const educationList = document.getElementById('education-list');
    const education = ['UNIVERSIDAD DE CUNDINAMARCA, sede Fusagasugá, Ingenieria Electronica (2013 - 2019)', 'UNIVERSIDAD DE LA SABANA, Diplomado Virtual en Big Data & Business Analytics (2021)'];
    education.forEach(edu => {
        const li = document.createElement('li');
        li.textContent = edu;
        educationList.appendChild(li);
    });
}

// Llenar la información cuando se carga la página
window.onload = fillInformation;