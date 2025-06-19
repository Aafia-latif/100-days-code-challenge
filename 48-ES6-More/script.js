let teamMembers = [
  {
    fullName: "Alice Johnson",
    role: "Frontend Developer",
    contact: { email: "alice.j@example.com" },
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    fullName: "Bob Smith",
    role: "UI/UX Designer",
    contact: { email: "bob.s@example.com" },
    skills: ["Figma", "Sketch", "Photoshop"],
  },
  {
    fullName: "Charlie Lee",
    role: "Backend Developer",
    contact: { email: "charlie.l@example.com" },
    skills: ["Node.js", "Express", "MongoDB"],
  },
  {
    fullName: "Alice Johnson", // duplicate name
    role: "Project Manager",
    contact: { email: "alice.pm@example.com" },
    skills: ["Agile", "Scrum", "Leadership"],
  },
  {
    fullName: "Diana Prince",
    role: "DevOps Engineer",
    contact: { email: "diana.p@example.com" },
    skills: ["Docker", "Kubernetes", "AWS"],
  },
  {
    fullName: "Ethan Hunt",
    role: "Security Analyst",
    contact: { email: "ethan.h@example.com" },
    skills: ["Pen Testing", "Firewalls", "Encryption"],
  },
  {
    fullName: "Fiona Glenanne",
    role: "Quality Assurance",
    contact: { email: "fiona.g@example.com" },
    skills: ["Test Cases", "Selenium", "JIRA"],
  },
  {
    fullName: "George Miller",
    role: "Full Stack Developer",
    contact: { email: "george.m@example.com" },
    skills: ["React", "Node.js", "SQL"],
  },
  {
    fullName: "Helen Carter",
    role: "Business Analyst",
    contact: { email: "helen.c@example.com" },
    skills: ["Documentation", "Process Flow", "Analysis"],
  },
];

const concatSkills = (skills) => skills.join(", ");

function createMemberCard({ fullName, role, contact, skills }) {
  const email = contact?.email ?? "No email provided";

  return `
    <div class="team-card">
      <h3>${fullName}</h3>
      <p><strong>Role:</strong> ${role}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Skills:</strong> ${concatSkills(skills)}</p>
      <span class="badge">${role}</span>
    </div>
  `;
}

function renderTeam(members) {
  const container = document.getElementById("teamContainer");
  container.innerHTML = members.length
    ? members.map(createMemberCard).join("")
    : `<p>No team members found.</p>`;
}

function addNewMember(event) {
  event.preventDefault();
  const {
    fullName: { value: fullName },
    role: { value: role },
    contactEmail: { value: contactEmail },
    skills: { value: skillsRaw },
  } = event.target.elements;

  const skills = skillsRaw
    .split(",")
    .map((skill) => skill.trim())
    .filter(Boolean);

  const newMember = {
    fullName,
    role,
    contact: contactEmail ? { email: contactEmail } : undefined,
    skills,
  };

  teamMembers = [...teamMembers, newMember];
  renderTeam(teamMembers);
  event.target.reset();
}

function filterTeam(query) {
  const lowerQuery = query.toLowerCase();
  return teamMembers.filter(
    ({ fullName, role }) =>
      fullName.toLowerCase().includes(lowerQuery) ||
      role.toLowerCase().includes(lowerQuery)
  );
}

function handleSearchInput(...args) {
  const [event] = args;
  const query = event.target.value.trim();
  renderTeam(query ? filterTeam(query) : teamMembers);
}

function init() {
  renderTeam(teamMembers);
  document
    .getElementById("memberForm")
    .addEventListener("submit", addNewMember);
  document
    .getElementById("searchInput")
    .addEventListener("input", handleSearchInput);
}

init();
