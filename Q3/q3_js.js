let employmentCount = 1;
        document.getElementById('addEmployment').addEventListener('click', function() {
            employmentCount++;
            const employmentHistory = document.getElementById('employmentHistory');
            const newEmploymentItem = document.createElement('div');
            newEmploymentItem.classList.add('employment-item');
            newEmploymentItem.innerHTML = `
    <label for="jobTitle${employmentCount}">Previous Job Title:</label>
    <input type="text" id="jobTitle${employmentCount}" name="jobTitle[]" required>
    <label for="companyName${employmentCount}">Company Name:</label>
    <input type="text" id="companyName${employmentCount}" name="companyName[]" required>
    <label for="employmentDates${employmentCount}">Employment Dates:</label>
    <input type="text" id="employmentDates${employmentCount}" name="employmentDates[]" placeholder="MM/YYYY - MM/YYYY" required>
    <label for="responsibilities${employmentCount}">Job Responsibilities:</label>
    <textarea id="responsibilities${employmentCount}" name="responsibilities[]" rows="4" required></textarea>
  `;
            employmentHistory.appendChild(newEmploymentItem);
        });

        let referenceCount = 1;
        document.getElementById('addReference').addEventListener('click', function() {
            referenceCount++;
            const references = document.getElementById('references');
            const newReferenceItem = document.createElement('div');
            newReferenceItem.classList.add('reference-item');
            newReferenceItem.innerHTML = `
    <label for="referenceName${referenceCount}">Reference Name:</label>
    <input type="text" id="referenceName${referenceCount}" name="referenceName[]" required>
    <label for="referenceContact${referenceCount}">Reference Contact Information:</label>
    <input type="text" id="referenceContact${referenceCount}" name="referenceContact[]" required>
    <label for="relationship${referenceCount}">Relationship to Applicant:</label>
    <input type="text" id="relationship${referenceCount}" name="relationship[]" required>
  `;
            references.appendChild(newReferenceItem);
        });

        document.getElementById('job-application-form').addEventListener('submit', function(event) {
            event.preventDefault(); 
            if (validateForm()) {
                processFormData();
            }
        });


        function validateForm() {
            let isValid = true;

            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const phoneNumber = document.getElementById('phoneNumber').value.trim();
            const email = document.getElementById('email').value.trim();
            const street = document.getElementById('street').value.trim();
            const city = document.getElementById('city').value.trim();
            const state = document.getElementById('state').value.trim();
            const zipCode = document.getElementById('zipCode').value.trim();
            const resume = document.getElementById('resume').value.trim();
            const coverLetter = document.getElementById('coverLetter').value.trim();
            const educationLevel = document.getElementById('educationLevel').value.trim();
            const schoolName = document.getElementById('schoolName').value.trim();
            const major = document.getElementById('major').value.trim();
            const graduationYear = document.getElementById('graduationYear').value.trim();
            const skills = document.getElementById('skills').value.trim();
            const startDate = document.getElementById('startDate').value.trim();
            const termsAgreement = document.getElementById('termsAgreement').checked;
            const privacyPolicy = document.getElementById('privacyPolicy').checked;

            if (firstName === '' || lastName === '' || phoneNumber === '' || email === '' || street === '' ||
                city === '' || state === '' || zipCode === '' || resume === '' || coverLetter === '' ||
                educationLevel === '' || schoolName === '' || major === '' || graduationYear === '' ||
                skills === '' || startDate === '' || !termsAgreement || !privacyPolicy) {
                isValid = false;
            }

            return isValid;
        }

        function processFormData() {
            const formData = new FormData(document.getElementById('job-application-form'));
            const applicantData = {};
            formData.forEach(function(value, key) {
                applicantData[key] = value;
            });
            console.log(applicantData);

            displayDataAsTable(applicantData);
        }

        function displayDataAsTable(data) {
            const tableBody = document.getElementById('applications-table-body');
            const newRow = tableBody.insertRow();
            newRow.innerHTML = `
    <td>${data.firstName} ${data.lastName}</td>
    <td>${data.email}</td>
    <td>${data.phoneNumber}</td>
    <td>${data.street}</td>
    <td>${data.city}</td>
    <td>${data.state}</td>
    <td>${data.zipCode}</td>
    <td><a href="${data.resume}" target="_blank">View Resume</a></td>
    <td>${data.coverLetter}</td>
    <td>${data.educationLevel}</td>
    <td>${data.schoolName}</td>
    <td>${data.major}</td>
    <td>${data.graduationYear}</td>
    <td>${data.skills}</td>
    <td>${data.certifications}</td>
    <td>${data.startDate}</td>
    <td>${data.workSchedule}</td>
    <td>${data.relocate ? 'Yes' : 'No'}</td>
    <td>${data.referenceName}</td>
    <td>${data.referenceContact}</td>
    <td>${data.relationship}</td>
    <td>${data.whyWorkHere}</td>
    <td>${data.termsAgreement ? 'Agreed' : 'Not Agreed'}</td>
    <td>${data.privacyPolicy ? 'Acknowledged' : 'Not Acknowledged'}</td>
  `;

            document.getElementById('applications-table').style.display = 'table';
        }

        document.getElementById('viewAsTableBtn').addEventListener('click', function() {
            document.getElementById('applications-table').style.display = 'table';
        });