import React from 'react';
import { useSelector } from 'react-redux';
import { t } from '../../utils/translations';
import { 
  FaUserTie, 
  FaUserGraduate, 
  FaCode, 
  FaDesktop, 
  FaCogs, 
  FaBullhorn, 
  FaHeadset, 
  FaTruck 
} from 'react-icons/fa';
import './Team.css';

const Team = () => {
  const { language } = useSelector(state => state.app);

  const teamMembers = [
    {
      id: 1,
      name: 'Аруна Тазабекова',
      position: language === 'ru' ? 'Основатель и директор' : 'Founder and Director',
      description: language === 'ru' 
        ? 'Вдохновитель и руководитель проекта, отвечает за стратегическое развитие, партнёрства и общее направление компании.'
        : 'Inspirer and project leader, responsible for strategic development, partnerships and overall company direction.',
      icon: FaUserTie,
      color: 'primary'
    },
    {
      id: 2,
      name: 'Эмир Маакеев',
      position: language === 'ru' ? 'Заместитель директора' : 'Deputy Director',
      description: language === 'ru'
        ? 'Курирует внутренние процессы, управляет командами и следит за эффективностью выполнения задач.'
        : 'Supervises internal processes, manages teams and monitors task execution efficiency.',
      icon: FaUserGraduate,
      color: 'success'
    },
    {
      id: 3,
      name: 'Рамис Шаршенов',
      position: language === 'ru' ? 'Backend-разработчик' : 'Backend Developer',
      description: language === 'ru'
        ? 'Отвечает за серверную часть проекта: базы данных, API, безопасность и надёжность системы.'
        : 'Responsible for the server side of the project: databases, API, security and system reliability.',
      icon: FaCode,
      color: 'warning'
    },
    {
      id: 4,
      name: 'Айислам Асылбеков',
      position: language === 'ru' ? 'Frontend-разработчик' : 'Frontend Developer',
      description: language === 'ru'
        ? 'Разрабатывает удобный, красивый и адаптивный интерфейс сайта.'
        : 'Develops convenient, beautiful and adaptive website interface.',
      icon: FaDesktop,
      color: 'info'
    },
    {
      id: 5,
      name: 'Кутман Кармышаков',
      position: language === 'ru' ? 'Frontend-разработчик' : 'Frontend Developer',
      description: language === 'ru'
        ? 'Создает интуитивно понятный пользовательский интерфейс.'
        : 'Creates intuitive user interface.',
      icon: FaDesktop,
      color: 'primary'
    },
    {
      id: 6,
      name: 'Ариет Медетбеков',
      position: language === 'ru' ? 'Frontend-разработчик' : 'Frontend Developer',
      description: language === 'ru'
        ? 'Обеспечивает отзывчивость и производительность веб-приложений.'
        : 'Ensures responsiveness and performance of web applications.',
      icon: FaDesktop,
      color: 'success'
    },
    {
      id: 7,
      name: 'Марат Уланбеков',
      position: language === 'ru' ? 'DevOps и автоматизация' : 'DevOps and Automation',
      description: language === 'ru'
        ? 'Обеспечивает стабильную работу проекта, настройку серверов, автоматизацию развертывания и CI/CD.'
        : 'Ensures stable project operation, server configuration, deployment automation and CI/CD.',
      icon: FaCogs,
      color: 'warning'
    },
    {
      id: 8,
      name: 'Амир Сейитов',
      position: language === 'ru' ? 'Контент-менеджер и маркетолог' : 'Content Manager and Marketer',
      description: language === 'ru'
        ? 'Отвечает за наполнение сайта товарами, описаниями, акциями, рекламой и продвижением проекта.'
        : 'Responsible for filling the site with products, descriptions, promotions, advertising and project promotion.',
      icon: FaBullhorn,
      color: 'info'
    },
    {
      id: 9,
      name: 'Айслам Акылов',
      position: language === 'ru' ? 'QA и поддержка пользователей' : 'QA and User Support',
      description: language === 'ru'
        ? 'Тестирует все функции сайта, следит за качеством продукта и помогает пользователям.'
        : 'Tests all website functions, monitors product quality and helps users.',
      icon: FaHeadset,
      color: 'primary'
    },
    {
      id: 10,
      name: 'Каниет Шаршенбеков',
      position: language === 'ru' ? 'Менеджер по работе с поставщиками' : 'Supplier Relations Manager',
      description: language === 'ru'
        ? 'Организует поставки товаров, следит за ассортиментом и поддерживает контакт с поставщиками.'
        : 'Organizes product supplies, monitors assortment and maintains contact with suppliers.',
      icon: FaTruck,
      color: 'success'
    }
  ];

  return (
    <div className="team-page">
      {/* Hero Section */}
      <section className="team-hero">
        <div className="container">
          <div className="team-hero-content">
            <h1 className="team-hero-title">{t('meetOurTeam', language)}</h1>
            <p className="team-hero-subtitle">
              {t('teamDescription', language)}
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="team-intro">
            <h2>{language === 'ru' ? 'Наша команда TechMarket' : 'Our TechMarket Team'}</h2>
            <p>
              {language === 'ru' 
                ? 'В нашей команде работают профессионалы, каждый из которых вносит важный вклад в развитие и успех проекта:'
                : 'Our team consists of professionals, each of whom makes an important contribution to the development and success of the project:'
              }
            </p>
          </div>

          <div className="team-grid">
            {teamMembers.map(member => (
              <div key={member.id} className="team-card">
                <div className={`team-card-header ${member.color}`}>
                  <div className="member-icon">
                    <member.icon />
                  </div>
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-position">{member.position}</p>
                </div>
                <div className="team-card-body">
                  <p className="member-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Values Section */}
          <div className="team-values">
            <h2>{language === 'ru' ? 'Наши ценности' : 'Our Values'}</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>{language === 'ru' ? 'Инновации' : 'Innovation'}</h3>
                <p>
                  {language === 'ru'
                    ? 'Мы постоянно ищем новые способы улучшить наш продукт и опыт пользователей.'
                    : 'We constantly seek new ways to improve our product and user experience.'
                  }
                </p>
              </div>
              <div className="value-item">
                <h3>{language === 'ru' ? 'Качество' : 'Quality'}</h3>
                <p>
                  {language === 'ru'
                    ? 'Мы стремимся к высочайшему качеству во всем, что мы делаем.'
                    : 'We strive for the highest quality in everything we do.'
                  }
                </p>
              </div>
              <div className="value-item">
                <h3>{language === 'ru' ? 'Команда' : 'Team'}</h3>
                <p>
                  {language === 'ru'
                    ? 'Мы верим в силу командной работы и взаимной поддержки.'
                    : 'We believe in the power of teamwork and mutual support.'
                  }
                </p>
              </div>
              <div className="value-item">
                <h3>{language === 'ru' ? 'Клиенты' : 'Customers'}</h3>
                <p>
                  {language === 'ru'
                    ? 'Наши клиенты - наш приоритет. Мы всегда ставим их потребности на первое место.'
                    : 'Our customers are our priority. We always put their needs first.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team; 