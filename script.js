       document.addEventListener('DOMContentLoaded', function() {
            const menuItems = [
                {
                    title: "Tarea 1: Presentacion y Horario",
                    description: "Hablando sobre mi y mi horario de la universidad",
                    icon: "fas fa-user",
                    color: "bg-red-100",
                    textColor: "text-red-600",
                    link: "https://dizzzy1.github.io/site/",
                    content: `
                        <div class="text-center">
                            <div class="bg-red-100 text-red-600 p-4 rounded-full inline-block mb-6">
                                <i class="fas fa-user"></i>
                            </div>
                            <h2 class="text-3xl font-bold text-gray-800 mb-4">Presentacion y Horario</h2>
                            <p class="text-lg text-gray-600 mb-6">Soy un chico de 23 años y realizo actividades interesantes, abre la pagina para que sepas mas sobre mi.</p>
                            <div class="bg-gray-100 p-6 rounded-lg text-left">
                                <h3 class="text-xl font-semibold mb-3">Características principales:</h3>
                                <ul class="space-y-2">
                                    <li><i class="fas fa-check text-green-500 mr-2"></i>Mis familiares</li>
                                    <li><i class="fas fa-check text-green-500 mr-2"></i> Mi hobbie favorito</li>
                                    <li><i class="fas fa-check text-green-500 mr-2"></i> Mi horario de clases</li>
                                    <li><i class="fas fa-check text-green-500 mr-2"></i> Mis deportes favoritos</li>
                                </ul>
                            </div>
                        </div>
                    `
                },
                {
                    title: "Tarea 2: Presentacion en tabla",
                    description: "Presentacion en tabla",
                    icon: "fas fa-table",
                    color: "bg-red-100",
                    textColor: "text-red-600",
                    link: "https://dizzzy1.github.io/practica2.1/",
                    content: `
                        <div class="text-center">
                            <div class="bg-red-100 text-red-600 p-4 rounded-full inline-block mb-6">
                                <i class="fas fa-table"></i>
                            </div>
                            <h2 class="text-3xl font-bold text-gray-800 mb-4">Presentacion en tabla</h2>
                            <p class="text-lg text-gray-600 mb-6">Aqui podras ver como soy fisicamente y mi horario en una tabla de filas y columnas.</p>
                            <div class="bg-gray-100 p-6 rounded-lg text-left">
                                <h3 class="text-xl font-semibold mb-3">Características principales:</h3>
                                <ul class="space-y-2">
                                    <li><i class="fas fa-check text-green-500 mr-2"></i>Mi estatura</li>
                                    <li><i class="fas fa-check text-green-500 mr-2"></i> Mi color de pelo</li>
                                    <li><i class="fas fa-check text-green-500 mr-2"></i> Como visto</li>
                                    <li><i class="fas fa-check text-green-500 mr-2"></i> Donde viajo</li>
                                </ul>
                            </div>
                        </div>
                    `
                },
                {
                    title: "Tara 3: 102 etiquetas",
                    description: "Todas las etiquetas de HTML",
                    icon: "fa-solid fa-tag",
                    color: "bg-blue-100",
                    textColor: "text-blue-600",
                    link: "https://dizzzy1.github.io/practica2/",
                    content: `
                        <div class="text-center">
                            <div class="bg-blue-100 text-blue-600 p-4 rounded-full inline-block mb-6">
                                <i class="fa-solid fa-tag"></i>
                            </div>
                            <h2 class="text-3xl font-bold text-gray-800 mb-4">102 etiquetas</h2>
                            <p class="text-lg text-gray-600 mb-6">En HTML existen muchas etiquetas, aqui veras cuales son.</p>
                            <div class="bg-gray-100 p-6 rounded-lg text-left">
                                <h3 class="text-xl font-semibold mb-3">Características principales:</h3>
                                <ul class="space-y-2">
                                    <li><i class="fas fa-check text-green-500 mr-2"></i> Etiquetas principales</li>
                                    <li><i class="fas fa-check text-green-500 mr-2"></i> Etiquetas secundarias</li>
                                    <li><i class="fas fa-check text-green-500 mr-2"></i> Etiquetas de todo tipo</li>
                                </ul>
                            </div>
                        </div>
                    `
                },
                {
                    title: "Tarea 4: Banco",
                    description: "Marmol's Bank a tu lado siempre",
                    icon: "fas fa-university",
                    color: "bg-blue-100",
                    textColor: "text-blue-400",
                    link: "https://dizzzy1.github.io/practica3/",
                    content: `
                        <div class="text-center">
                            <div class="bg-blue-100 text-blue-400 p-4 rounded-full inline-block mb-6">
                                <i class="fas fa-university"></i>
                            </div>
                            <h2 class="text-3xl font-bold text-gray-800 mb-4">Banco</h2>
                            <p class="text-lg text-gray-600 mb-6">Marmols Bank, donde tu dinero cuenta.</p>
                            <div class="bg-gray-100 p-6 rounded-lg text-left">
                                <h3 class="text-xl font-semibold mb-3">Características principales:</h3>
                                <ul class="space-y-2">
                                    <li><i class="fas fa-check text-green-500 mr-2"></i>Mas de 10 tipos de cuentas bancarias</li>
                                    <li><i class="fas fa-check text-green-500 mr-2"></i>Tarjetas de debito y credito</li>
                                    <li><i class="fas fa-check text-green-500 mr-2"></i>Prestamos ajustados para ti</li>
                                    <li><i class="fas fa-check text-green-500 mr-2"></i>Opcion de mandar y/o resibir tus remesas</li>
                                </ul>
                            </div>
                        </div>
                    `
                },
                {
                    title: "Tara 5: Algoritmo de Luhn",
                    description: "Verificador de Cedula",
                    icon: "fas fa-credit-card",
                    color: "bg-pink-100",
                    textColor: "text-pink-600",
                    link: "https://dizzzy1.github.io/practica4/",
                    content: `
                        <div class="text-center">
                            <div class="bg-pink-100 text-pink-600 p-4 rounded-full inline-block mb-6">
                                <i class="fas fa-credit-card"></i>
                            </div>
                            <h2 class="text-3xl font-bold text-gray-800 mb-4">Algoritmo de Luhn</h2>
                            <p class="text-lg text-gray-600 mb-6">Metodo simple que se utiliza para validar numeros de identificacion.</p>
                            <div class="bg-gray-100 p-6 rounded-lg text-left">
                                <h3 class="text-xl font-semibold mb-3">Características principales:</h3>
                                <ul class="space-y-2">
                                    <li><i class="fas fa-check text-green-500 mr-2"></i>Detecta errores simples</li>
                                    <li><i class="fas fa-check text-green-500 mr-2"></i>Funciona con numeros de identificacion</li>
                                    <li><i class="fas fa-check text-green-500 mr-2"></i>Usa una suma ponderada y modulo 10 para validar</li>
                                    <li><i class="fas fa-check text-green-500 mr-2"></i>No es un sistema de seguridad, solo de verificación basica.</li>
                                </ul>
                            </div>
                        </div>
                    `
                },
                {
                    title: "Tarea 6: Menu Dinamico",
                    description: "Despliegue de menu con opciones",
                    icon: "fas fa-bars",
                    color: "bg-blue-100",
                    textColor: "text-blue-700",
                    link: "https://dizzzy1.github.io/practica5/",
                    content: `
                        <div class="text-center">
                            <div class="bg-blue-100 text-blue-700 p-4 rounded-full inline-block mb-6">
                                <i class="fas fa-bars"></i>
                            </div>
                            <h2 class="text-3xl font-bold text-gray-800 mb-4">Menu Dinamico</h2>
                            <p class="text-lg text-gray-600 mb-6">Tipo de menu de navegacion que se genera o actualiza automaticamente.</p>
                            <div class="bg-gray-100 p-6 rounded-lg text-left">
                                <h3 class="text-xl font-semibold mb-3">Características principales:</h3>
                                <ul class="space-y-2">
                                    <li><i class="fas fa-check text-green-500 mr-2"></i>Basado en datos</li>
                                    <li><i class="fas fa-check text-green-500 mr-2"></i>Actualización automatica</li>
                                    <li><i class="fas fa-check text-green-500 mr-2"></i>Interactividad</li>
                                    <li><i class="fas fa-check text-green-500 mr-2"></i>Reutilizable y escalable</li>
                                </ul>
                            </div>
                        </div>
                    `
                },
                {
                    title: "Tarea 7: Formulario multiplagina",
                    description: "Llenar formulario de multiples paginas",
                    icon: "fas fa-file-alt",
                    color: "bg-gray-100",
                    textColor: "text-gray-800",
                    link: "https://dizzzy1.github.io/practica6/",
                    content: `
                        <div class="text-center">
                            <div class="bg-gray-100 text-gray-800 p-4 rounded-full inline-block mb-6">
                                <i class="fas fa-file-alt"></i>
                            </div>
                            <h2 class="text-3xl font-bold text-gray-800 mb-4">Formulario multiplagina</h2>
                            <p class="text-lg text-gray-600 mb-6">Tipo de formulario que divide su contenido en varias secciones o pasos.</p>
                            <div class="bg-gray-100 p-6 rounded-lg text-left">
                                <h3 class="text-xl font-semibold mb-3">Características principales:</h3>
                                <ul class="space-y-2">
                                    <li><i class="fas fa-check text-green-500 mr-2"></i>Division por pasos</li>
                                    <li><i class="fas fa-check text-green-500 mr-2"></i>Navegación controlada</li>
                                    <li><i class="fas fa-check text-green-500 mr-2"></i>Persistencia de datos</li>
                                    <li><i class="fas fa-check text-green-500 mr-2"></i>Validación por paso o al final</li>
                                </ul>
                            </div>
                        </div>
                    `
                },
                {
                    title: "Tarea 8: Formulario QR",
                    description: "Llenas formulario para generar codigo QR",
                    icon: "fas fa-qrcode",
                    color: "bg-gray-100",
                    textColor: "text-gray-600",
                    link: "https://dizzzy1.github.io/practica7/",
                    content: `
                        <div class="text-center">
                            <div class="bg-gray-100 text-gray-600 p-4 rounded-full inline-block mb-6">
                                <i class="fas fa-qrcode"></i>
                            </div>
                            <h2 class="text-3xl font-bold text-gray-800 mb-4">Formulario QR</h2>
                            <p class="text-lg text-gray-600 mb-6">Herramienta que permite al usuario ingresar datos y generar un código QR dinamicamente.</p>
                            <div class="bg-gray-100 p-6 rounded-lg text-left">
                                <h3 class="text-xl font-semibold mb-3">Características principales:</h3>
                                <ul class="space-y-2">
                                    <li><i class="fas fa-check text-green-500 mr-2"></i>Entrada dinamica</li>
                                    <li><i class="fas fa-check text-green-500 mr-2"></i>Generación automatica</li>
                                    <li><i class="fas fa-check text-green-500 mr-2"></i>Visualizacion en tiempo real</li>
                                </ul>
                            </div>
                        </div>
                    `
                },
                {
                    title: "Tarea 9: Generador de Graficos",
                    description: "Llenar opciones para generar 2 tipos de Graficos",
                    icon: "fas fa-chart-bar",
                    color: "bg-yellow-100",
                    textColor: "text-yellow-600",
                    link: "https://dizzzy1.github.io/practica8/",
                    content: `
                        <div class="text-center">
                            <div class="bg-yellow-100 text-yellow-600 p-4 rounded-full inline-block mb-6">
                                <i class="fas fa-chart-bar"></i>
                            </div>
                            <h2 class="text-3xl font-bold text-gray-800 mb-4">Generador de Graficos</h2>
                            <p class="text-lg text-gray-600 mb-6">Interfaz que permite al usuario introducir datos y convertirlos en graficos de barra o lienal.</p>
                            <div class="bg-gray-100 p-6 rounded-lg text-left">
                                <h3 class="text-xl font-semibold mb-3">Características principales:</h3>
                                <ul class="space-y-2">
                                    <li><i class="fas fa-check text-green-500 mr-2"></i>Renderizado instantaneo</li>
                                    <li><i class="fas fa-check text-green-500 mr-2"></i>Entrada estructurada</li>
                                    <li><i class="fas fa-check text-green-500 mr-2"></i>Personalizacion</li>
                                    <li><i class="fas fa-check text-green-500 mr-2"></i>Opcion de descarga en 2 tipos de archivos</li>
                                </ul>
                            </div>
                        </div>
                    `
                },
                {
                    title: "Tarea 10: Formulario Base de Datos",
                    description: "Formulario conectado a base de datos",
                    icon: "fas fa-database",
                    color: "bg-red-100",
                    textColor: "text-red-700",
                    link: "https://dizzzy1.github.io/formulariodb/",
                    content: `
                        <div class="text-center">
                            <div class="bg-red-100 text-red-700 p-4 rounded-full inline-block mb-6">
                                <i class="fas fa-database"></i>
                            </div>
                            <h2 class="text-3xl font-bold text-gray-800 mb-4">Formulario Base de Datos</h2>
                            <p class="text-lg text-gray-600 mb-6">Herramienta que permite enviar, consultar, modificar o eliminar datos almacenados en una base de datos.</p>
                            <div class="bg-gray-100 p-6 rounded-lg text-left">
                                <h3 class="text-xl font-semibold mb-3">Características principales:</h3>
                                <ul class="space-y-2">
                                    <li><i class="fas fa-check text-green-500 mr-2"></i>Seguridad</li>
                                    <li><i class="fas fa-check text-green-500 mr-2"></i>Entrada de datos estructurada</li>
                                    <li><i class="fas fa-check text-green-500 mr-2"></i>Conexión con la base de datos</li>
                                </ul>
                            </div>
                        </div>
                    `
                }
            ];
            
            const menuContainer = document.getElementById('menuContainer');
            const contentContainer = document.getElementById('contentContainer');
            const dynamicContent = document.getElementById('dynamicContent');
            const externalLink = document.getElementById('externalLink');
            const backButton = document.getElementById('backButton');
            
            menuItems.forEach((item, index) => {
                const menuItem = document.createElement('div');
                menuItem.className = `menu-item bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300`;
                
                menuItem.innerHTML = `
                    <div class="menu-link h-full p-6">
                        <div class="flex items-center mb-4">
                            <div class="${item.color} ${item.textColor} p-3 rounded-lg mr-4">
                                <i class="${item.icon} text-xl"></i>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-800">${item.title}</h3>
                        </div>
                        <p class="text-gray-600 mb-4">${item.description}</p>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-500">Haz clic para ver más</span>
                            <span class="${item.textColor}">
                                <i class="fas fa-arrow-right"></i>
                            </span>
                        </div>
                    </div>
                `;
                

                menuItem.addEventListener('click', () => {
                    showContent(item);
                });
                
                menuContainer.appendChild(menuItem);
            });
            
            function showContent(item) {
                // Ocultar menú y mostrar contenido
                menuContainer.style.display = 'none';
                contentContainer.style.display = 'block';
                
                // Configurar el contenido dinámico
                dynamicContent.innerHTML = item.content;
                externalLink.href = item.link;
                externalLink.innerHTML = `<i class="fas fa-external-link-alt mr-2"></i> Visitar ${item.title}`;
                
                externalLink.className = `inline-block px-6 py-3 ${item.color.replace('bg-', 'bg-')} ${item.textColor} rounded-lg hover:${item.color.replace('bg-', 'bg-').replace('100', '200')} transition`;
            }
            
            // Volver al menú
            backButton.addEventListener('click', function() {
                contentContainer.style.display = 'none';
                menuContainer.style.display = 'grid';
            });
        });