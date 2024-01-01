// // what is your github username
// what is your email Adress
// project name 

// please write a short description of your project
// what kind of liscence should your project have
// what command should be used to instal dependencies 
// what does the user need to know about the repo

const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown");


const questions = [
    {

        type: "input",
        name: "projectName",
        message: "what is you project name?"
        
        },
        {
        
            type: "input",
            name: "description",
            message: "whats  your project about?"
            
        },
        {
        
            type: "input",
            name: "installation",
            message: "whats needed to install your project?"
            
        },
        {
        
            type: "input",
            name: "usage",
            message: "how do people operate the project?"
            
        },
        {
        
                type: "input",
                name: "contribution",
                message: "how can people contribute"
                
        },
        {
        type: "list",
        name: "liscences",
        message: "do you have a liscence on your project?",
        choices: ["Academic Free License v3.0","Artistic license 2.0","MIT","Mozilla Public License 2.0","PostgreSQL License","Microsoft Public License",]
        },
        {
        
            type: "input",
            name: "Name",
            message: "write down your contact information name"
            
        },
        {
        
            type: "input",
            name: "GithubUsername",
            message: "write down your github username"
            
        }, 
        {
        
            type: "input",
            name: "GithubLink",
            message: "write down your github link"
            
        }, 
        {
        
            type: "input",
            name: "Email",
            message: "write down your emiil"
            
        },
];

inquirer.prompt(questions).then((answer)=>{
   const filename=`${answer.projectName}.md`;
let readMeDetailsp1=`
# Table of contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contribution)
* [License](#Licenses)
* [Questions](#Questions)

# ProjectName : 
${answer.projectName}
## Description : <a id="Description"></a>
${answer.description}
## Instalation: <a id="Instalation"></a>
${answer.installation}
## Usage: <a id= "Usage"></a>
${answer.usage}
## contribution: <a id= "contribution"></a>
${answer.contribution}
## liscences : <a id= "liscences"></a>
${answer.liscences}\n`


if(answer.liscences.includes("MIT")){
   readMeDetailsp1+=mitLiscense
}else if(answer.liscences.includes("Academic Free License v3.0")){
    readMeDetailsp1+=AcademicFreeLiscense;
}else if(answer.liscences.includes("Mozilla Public License 2.0")){
    readMeDetailsp1+=MozillaLiscense;
}else if(answer.liscences.includes("Artistic license 2.0")){
    readMeDetailsp1+=TheArtisticLicense;
}else if(answer.liscences.includes("Microsoft Public License")){
    readMeDetailsp1+=MicrosoftPublicLicense;
}else if(answer.liscences.includes("PostgreSQL License")){
    readMeDetailsp1+=PostgreSQLLicense;
}

readMeDetailsp1+=`
## Questions: <a id= "Questions"></a>
Author: ${answer.Name}
GitHub Username: [${answer.GithubUsername}](${answer.GithubLink})
Email: <${answer.Email}>`

fs.writeFile(filename,readMeDetailsp1, (err) =>
err ? console.log(err) : console.log('Success!')
    
    );




})

// const liscenceBadge={
//     AcademicFreeLicensev3: "djdd",



// }

// liscences{
    const mitLiscense=`MIT License
 
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.`

    const AcademicFreeLiscense=`
    1) Grant of Copyright License. Licensor grants You a worldwide, royalty-free, non-exclusive, sublicensable license, for the duration of the copyright, to do the following:
    a) to reproduce the Original Work in copies, either alone or as part of a collective work;
    b) to translate, adapt, alter, transform, modify, or arrange the Original Work, thereby creating derivative works ("Derivative Works") based upon the Original Work;
    c) to distribute or communicate copies of the Original Work and Derivative Works to the public, under any license of your choice that does not contradict the terms and conditions, including Licensor's reserved rights and remedies, in this Academic Free License;
    d) to perform the Original Work publicly; and
    e) to display the Original Work publicly.
    2) Grant of Patent License. Licensor grants You a worldwide, royalty-free, non-exclusive, sublicensable license, under patent claims owned or controlled by the Licensor that are embodied in the Original Work as furnished by the Licensor, for the duration of the patents, to make, use, sell, offer for sale, have made, and import the Original Work and Derivative Works.
    3) Grant of Source Code License. The term "Source Code" means the preferred form of the Original Work for making modifications to it and all available documentation describing how to modify the Original Work. Licensor agrees to provide a machine-readable copy of the Source Code of the Original Work along with each copy of the Original Work that Licensor distributes. Licensor reserves the right to satisfy this obligation by placing a machine-readable copy of the Source Code in an information repository reasonably calculated to permit inexpensive and convenient access by You for as long as Licensor continues to distribute the Original Work.
    4) Exclusions From License Grant. Neither the names of Licensor, nor the names of any contributors to the Original Work, nor any of their trademarks or service marks, may be used to endorse or promote products derived from this Original Work without express prior permission of the Licensor. Except as expressly stated herein, nothing in this License grants any license to Licensor's trademarks, copyrights, patents, trade secrets or any other intellectual property. No patent license is granted to make, use, sell, offer for sale, have made, or import embodiments of any patent claims other than the licensed claims defined in Section 2. No license is granted to the trademarks of Licensor even if such marks are included in the Original Work. Nothing in this License shall be interpreted to prohibit Licensor from licensing under terms different from this License any Original Work that Licensor otherwise would have a right to license.
    5) External Deployment. The term "External Deployment" means the use, distribution, or communication of the Original Work or Derivative Works in any way such that the Original Work or Derivative Works may be used by anyone other than You, whether those works are distributed or communicated to those persons or made available as an application intended for use over a network. As an express condition for the grants of license hereunder, You must treat any External Deployment by You of the Original Work or a Derivative Work as a distribution under section 1(c).
    6) Attribution Rights. You must retain, in the Source Code of any Derivative Works that You create, all copyright, patent, or trademark notices from the Source Code of the Original Work, as well as any notices of licensing and any descriptive text identified therein as an "Attribution Notice." You must cause the Source Code for any Derivative Works that You create to carry a prominent Attribution Notice reasonably calculated to inform recipients that You have modified the Original Work.
    7) Warranty of Provenance and Disclaimer of Warranty. Licensor warrants that the copyright in and to the Original Work and the patent rights granted herein by Licensor are owned by the Licensor or are sublicensed to You under the terms of this License with the permission of the contributor(s) of those copyrights and patent rights. Except as expressly stated in the immediately preceding sentence, the Original Work is provided under this License on an "AS IS" BASIS and WITHOUT WARRANTY, either express or implied, including, without limitation, the warranties of non-infringement, merchantability or fitness for a particular purpose. THE ENTIRE RISK AS TO THE QUALITY OF THE ORIGINAL WORK IS WITH YOU. This DISCLAIMER OF WARRANTY constitutes an essential part of this License. No license to the Original Work is granted by this License except under this disclaimer.
    8) Limitation of Liability. Under no circumstances and under no legal theory, whether in tort (including negligence), contract, or otherwise, shall the Licensor be liable to anyone for any indirect, special, incidental, or consequential damages of any character arising as a result of this License or the use of the Original Work including, without limitation, damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses. This limitation of liability shall not apply to the extent applicable law prohibits such limitation.
    9) Acceptance and Termination. If, at any time, You expressly assented to this License, that assent indicates your clear and irrevocable acceptance of this License and all of its terms and conditions. If You distribute or communicate copies of the Original Work or a Derivative Work, You must make a reasonable effort under the circumstances to obtain the express assent of recipients to the terms of this License. This License conditions your rights to undertake the activities listed in Section 1, including your right to create Derivative Works based upon the Original Work, and doing so without honoring these terms and conditions is prohibited by copyright law and international treaty. Nothing in this License is intended to affect copyright exceptions and limitations (including "fair use" or "fair dealing"). This License shall terminate immediately and You may no longer exercise any of the rights granted to You by this License upon your failure to honor the conditions in Section 1(c).
    10) Termination for Patent Action. This License shall terminate automatically and You may no longer exercise any of the rights granted to You by this License as of the date You commence an action, including a cross-claim or counterclaim, against Licensor or any licensee alleging that the Original Work infringes a patent. This termination provision shall not apply for an action alleging patent infringement by combinations of the Original Work with other software or hardware.
    11) Jurisdiction, Venue and Governing Law. Any action or suit relating to this License may be brought only in the courts of a jurisdiction wherein the Licensor resides or in which Licensor conducts its primary business, and under the laws of that jurisdiction excluding its conflict-of-law provisions. The application of the United Nations Convention on Contracts for the International Sale of Goods is expressly excluded. Any use of the Original Work outside the scope of this License or after its termination shall be subject to the requirements and penalties of copyright or patent law in the appropriate jurisdiction. This section shall survive the termination of this License.
    12) Attorneys' Fees. In any action to enforce the terms of this License or seeking damages relating thereto, the prevailing party shall be entitled to recover its costs and expenses, including, without limitation, reasonable attorneys' fees and costs incurred in connection with such action, including any appeal of such action. This section shall survive the termination of this License.
    13) Miscellaneous. If any provision of this License is held to be unenforceable, such provision shall be reformed only to the extent necessary to make it enforceable.
    14) Definition of "You" in This License. "You" throughout this License, whether in upper or lower case, means an individual or a legal entity exercising rights under, and complying with all of the terms of, this License. For legal entities, "You" includes any entity that controls, is controlled by, or is under common control with you. For purposes of this definition, "control" means (i) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (ii) ownership of fifty percent (50%) or more of the outstanding shares, or (iii) beneficial ownership of such entity.
    15) Right to Use. You may use the Original Work in all ways not otherwise restricted or conditioned by this License or by law, and Licensor promises not to interfere with or be responsible for such uses by You.
    16) Modification of This License. This License is Copyright © 2005 Lawrence Rosen. Permission is granted to copy, distribute, or communicate this License without modification. Nothing in this License permits You to modify this License as applied to the Original Work or to Derivative Works. However, You may modify the text of this License and copy, distribute or communicate your modified version (the "Modified License") and apply it to other original works of authorship subject to the following conditions: (i) You may not indicate in any way that your Modified License is the "Academic Free License" or "AFL" and you may not use those names in the name of your Modified License; (ii) You must replace the notice specified in the first paragraph above with the notice "Licensed under <insert your license name here>" or with a notice of your own that is not confusingly similar to the notice in this License; and (iii) You may not claim that your original works are open source software unless your Modified License has been approved by Open Source Initiative (OSI) and You comply with its license review and certification process.`
    
    const MozillaLiscense=`
    Mozilla Public License Version 2.0
    ==================================
    
    1. Definitions
    --------------
    
    1.1. "Contributor"
        means each individual or legal entity that creates, contributes to
        the creation of, or owns Covered Software.
    
    1.2. "Contributor Version"
        means the combination of the Contributions of others (if any) used
        by a Contributor and that particular Contributor's Contribution.
    
    1.3. "Contribution"
        means Covered Software of a particular Contributor.
    
    1.4. "Covered Software"
        means Source Code Form to which the initial Contributor has attached
        the notice in Exhibit A, the Executable Form of such Source Code
        Form, and Modifications of such Source Code Form, in each case
        including portions thereof.
    
    1.5. "Incompatible With Secondary Licenses"
        means
    
        (a) that the initial Contributor has attached the notice described
            in Exhibit B to the Covered Software; or
    
        (b) that the Covered Software was made available under the terms of
            version 1.1 or earlier of the License, but not also under the
            terms of a Secondary License.
    
    1.6. "Executable Form"
        means any form of the work other than Source Code Form.
    
    1.7. "Larger Work"
        means a work that combines Covered Software with other material, in
        a separate file or files, that is not Covered Software.
    
    1.8. "License"
        means this document.
    
    1.9. "Licensable"
        means having the right to grant, to the maximum extent possible,
        whether at the time of the initial grant or subsequently, any and
        all of the rights conveyed by this License.
    
    1.10. "Modifications"
        means any of the following:
    
        (a) any file in Source Code Form that results from an addition to,
            deletion from, or modification of the contents of Covered
            Software; or
    
        (b) any new file in Source Code Form that contains any Covered
            Software.
    
    1.11. "Patent Claims" of a Contributor
        means any patent claim(s), including without limitation, method,
        process, and apparatus claims, in any patent Licensable by such
        Contributor that would be infringed, but for the grant of the
        License, by the making, using, selling, offering for sale, having
        made, import, or transfer of either its Contributions or its
        Contributor Version.
    
    1.12. "Secondary License"
        means either the GNU General Public License, Version 2.0, the GNU
        Lesser General Public License, Version 2.1, the GNU Affero General
        Public License, Version 3.0, or any later versions of those
        licenses.
    
    1.13. "Source Code Form"
        means the form of the work preferred for making modifications.
    
    1.14. "You" (or "Your")
        means an individual or a legal entity exercising rights under this
        License. For legal entities, "You" includes any entity that
        controls, is controlled by, or is under common control with You. For
        purposes of this definition, "control" means (a) the power, direct
        or indirect, to cause the direction or management of such entity,
        whether by contract or otherwise, or (b) ownership of more than
        fifty percent (50%) of the outstanding shares or beneficial
        ownership of such entity.
    
    2. License Grants and Conditions
    --------------------------------
    
    2.1. Grants
    
    Each Contributor hereby grants You a world-wide, royalty-free,
    non-exclusive license:
    
    (a) under intellectual property rights (other than patent or trademark)
        Licensable by such Contributor to use, reproduce, make available,
        modify, display, perform, distribute, and otherwise exploit its
        Contributions, either on an unmodified basis, with Modifications, or
        as part of a Larger Work; and
    
    (b) under Patent Claims of such Contributor to make, use, sell, offer
        for sale, have made, import, and otherwise transfer either its
        Contributions or its Contributor Version.
    
    2.2. Effective Date
    
    The licenses granted in Section 2.1 with respect to any Contribution
    become effective for each Contribution on the date the Contributor first
    distributes such Contribution.
    
    2.3. Limitations on Grant Scope
    
    The licenses granted in this Section 2 are the only rights granted under
    this License. No additional rights or licenses will be implied from the
    distribution or licensing of Covered Software under this License.
    Notwithstanding Section 2.1(b) above, no patent license is granted by a
    Contributor:
    
    (a) for any code that a Contributor has removed from Covered Software;
        or
    
    (b) for infringements caused by: (i) Your and any other third party's
        modifications of Covered Software, or (ii) the combination of its
        Contributions with other software (except as part of its Contributor
        Version); or
    
    (c) under Patent Claims infringed by Covered Software in the absence of
        its Contributions.
    
    This License does not grant any rights in the trademarks, service marks,
    or logos of any Contributor (except as may be necessary to comply with
    the notice requirements in Section 3.4).
    
    2.4. Subsequent Licenses
    
    No Contributor makes additional grants as a result of Your choice to
    distribute the Covered Software under a subsequent version of this
    License (see Section 10.2) or under the terms of a Secondary License (if
    permitted under the terms of Section 3.3).
    
    2.5. Representation
    
    Each Contributor represents that the Contributor believes its
    Contributions are its original creation(s) or it has sufficient rights
    to grant the rights to its Contributions conveyed by this License.
    
    2.6. Fair Use
    
    This License is not intended to limit any rights You have under
    applicable copyright doctrines of fair use, fair dealing, or other
    equivalents.
    
    2.7. Conditions
    
    Sections 3.1, 3.2, 3.3, and 3.4 are conditions of the licenses granted
    in Section 2.1.
    
    3. Responsibilities
    -------------------
    
    3.1. Distribution of Source Form
    
    All distribution of Covered Software in Source Code Form, including any
    Modifications that You create or to which You contribute, must be under
    the terms of this License. You must inform recipients that the Source
    Code Form of the Covered Software is governed by the terms of this
    License, and how they can obtain a copy of this License. You may not
    attempt to alter or restrict the recipients' rights in the Source Code
    Form.
    
    3.2. Distribution of Executable Form
    
    If You distribute Covered Software in Executable Form then:
    
    (a) such Covered Software must also be made available in Source Code
        Form, as described in Section 3.1, and You must inform recipients of
        the Executable Form how they can obtain a copy of such Source Code
        Form by reasonable means in a timely manner, at a charge no more
        than the cost of distribution to the recipient; and
    
    (b) You may distribute such Executable Form under the terms of this
        License, or sublicense it under different terms, provided that the
        license for the Executable Form does not attempt to limit or alter
        the recipients' rights in the Source Code Form under this License.
    
    3.3. Distribution of a Larger Work
    
    You may create and distribute a Larger Work under terms of Your choice,
    provided that You also comply with the requirements of this License for
    the Covered Software. If the Larger Work is a combination of Covered
    Software with a work governed by one or more Secondary Licenses, and the
    Covered Software is not Incompatible With Secondary Licenses, this
    License permits You to additionally distribute such Covered Software
    under the terms of such Secondary License(s), so that the recipient of
    the Larger Work may, at their option, further distribute the Covered
    Software under the terms of either this License or such Secondary
    License(s).
    
    3.4. Notices
    
    You may not remove or alter the substance of any license notices
    (including copyright notices, patent notices, disclaimers of warranty,
    or limitations of liability) contained within the Source Code Form of
    the Covered Software, except that You may alter any license notices to
    the extent required to remedy known factual inaccuracies.
    
    3.5. Application of Additional Terms
    
    You may choose to offer, and to charge a fee for, warranty, support,
    indemnity or liability obligations to one or more recipients of Covered
    Software. However, You may do so only on Your own behalf, and not on
    behalf of any Contributor. You must make it absolutely clear that any
    such warranty, support, indemnity, or liability obligation is offered by
    You alone, and You hereby agree to indemnify every Contributor for any
    liability incurred by such Contributor as a result of warranty, support,
    indemnity or liability terms You offer. You may include additional
    disclaimers of warranty and limitations of liability specific to any
    jurisdiction.
    
    4. Inability to Comply Due to Statute or Regulation
    ---------------------------------------------------
    
    If it is impossible for You to comply with any of the terms of this
    License with respect to some or all of the Covered Software due to
    statute, judicial order, or regulation then You must: (a) comply with
    the terms of this License to the maximum extent possible; and (b)
    describe the limitations and the code they affect. Such description must
    be placed in a text file included with all distributions of the Covered
    Software under this License. Except to the extent prohibited by statute
    or regulation, such description must be sufficiently detailed for a
    recipient of ordinary skill to be able to understand it.
    
    5. Termination
    --------------
    
    5.1. The rights granted under this License will terminate automatically
    if You fail to comply with any of its terms. However, if You become
    compliant, then the rights granted under this License from a particular
    Contributor are reinstated (a) provisionally, unless and until such
    Contributor explicitly and finally terminates Your grants, and (b) on an
    ongoing basis, if such Contributor fails to notify You of the
    non-compliance by some reasonable means prior to 60 days after You have
    come back into compliance. Moreover, Your grants from a particular
    Contributor are reinstated on an ongoing basis if such Contributor
    notifies You of the non-compliance by some reasonable means, this is the
    first time You have received notice of non-compliance with this License
    from such Contributor, and You become compliant prior to 30 days after
    Your receipt of the notice.
    
    5.2. If You initiate litigation against any entity by asserting a patent
    infringement claim (excluding declaratory judgment actions,
    counter-claims, and cross-claims) alleging that a Contributor Version
    directly or indirectly infringes any patent, then the rights granted to
    You by any and all Contributors for the Covered Software under Section
    2.1 of this License shall terminate.
    
    5.3. In the event of termination under Sections 5.1 or 5.2 above, all
    end user license agreements (excluding distributors and resellers) which
    have been validly granted by You or Your distributors under this License
    prior to termination shall survive termination.
    
    ************************************************************************
    *                                                                      *
    *  6. Disclaimer of Warranty                                           *
    *  -------------------------                                           *
    *                                                                      *
    *  Covered Software is provided under this License on an "as is"       *
    *  basis, without warranty of any kind, either expressed, implied, or  *
    *  statutory, including, without limitation, warranties that the       *
    *  Covered Software is free of defects, merchantable, fit for a        *
    *  particular purpose or non-infringing. The entire risk as to the     *
    *  quality and performance of the Covered Software is with You.        *
    *  Should any Covered Software prove defective in any respect, You     *
    *  (not any Contributor) assume the cost of any necessary servicing,   *
    *  repair, or correction. This disclaimer of warranty constitutes an   *
    *  essential part of this License. No use of any Covered Software is   *
    *  authorized under this License except under this disclaimer.         *
    *                                                                      *
    ************************************************************************
    
    ************************************************************************
    *                                                                      *
    *  7. Limitation of Liability                                          *
    *  --------------------------                                          *
    *                                                                      *
    *  Under no circumstances and under no legal theory, whether tort      *
    *  (including negligence), contract, or otherwise, shall any           *
    *  Contributor, or anyone who distributes Covered Software as          *
    *  permitted above, be liable to You for any direct, indirect,         *
    *  special, incidental, or consequential damages of any character      *
    *  including, without limitation, damages for lost profits, loss of    *
    *  goodwill, work stoppage, computer failure or malfunction, or any    *
    *  and all other commercial damages or losses, even if such party      *
    *  shall have been informed of the possibility of such damages. This   *
    *  limitation of liability shall not apply to liability for death or   *
    *  personal injury resulting from such party's negligence to the       *
    *  extent applicable law prohibits such limitation. Some               *
    *  jurisdictions do not allow the exclusion or limitation of           *
    *  incidental or consequential damages, so this exclusion and          *
    *  limitation may not apply to You.                                    *
    *                                                                      *
    ************************************************************************
    
    8. Litigation
    -------------
    
    Any litigation relating to this License may be brought only in the
    courts of a jurisdiction where the defendant maintains its principal
    place of business and such litigation shall be governed by laws of that
    jurisdiction, without reference to its conflict-of-law provisions.
    Nothing in this Section shall prevent a party's ability to bring
    cross-claims or counter-claims.
    
    9. Miscellaneous
    ----------------
    
    This License represents the complete agreement concerning the subject
    matter hereof. If any provision of this License is held to be
    unenforceable, such provision shall be reformed only to the extent
    necessary to make it enforceable. Any law or regulation which provides
    that the language of a contract shall be construed against the drafter
    shall not be used to construe this License against a Contributor.
    
    10. Versions of the License
    ---------------------------
    
    10.1. New Versions
    
    Mozilla Foundation is the license steward. Except as provided in Section
    10.3, no one other than the license steward has the right to modify or
    publish new versions of this License. Each version will be given a
    distinguishing version number.
    
    10.2. Effect of New Versions
    
    You may distribute the Covered Software under the terms of the version
    of the License under which You originally received the Covered Software,
    or under the terms of any subsequent version published by the license
    steward.
    
    10.3. Modified Versions
    
    If you create software not governed by this License, and you want to
    create a new license for such software, you may create and use a
    modified version of this License if you rename the license and remove
    any references to the name of the license steward (except to note that
    such modified license differs from this License).
    
    10.4. Distributing Source Code Form that is Incompatible With Secondary
    Licenses
    
    If You choose to distribute Source Code Form that is Incompatible With
    Secondary Licenses under the terms of this version of the License, the
    notice described in Exhibit B of this License must be attached.
    
    Exhibit A - Source Code Form License Notice
    -------------------------------------------
    
      This Source Code Form is subject to the terms of the Mozilla Public
      License, v. 2.0. If a copy of the MPL was not distributed with this
      file, You can obtain one at http://mozilla.org/MPL/2.0/.
    
    If it is not possible or desirable to put the notice in a particular
    file, then You may include the notice in a location (such as a LICENSE
    file in a relevant directory) where a recipient would be likely to look
    for such a notice.
    
    You may add additional accurate notices of copyright ownership.
    
    Exhibit B - "Incompatible With Secondary Licenses" Notice
    ---------------------------------------------------------
    
      This Source Code Form is "Incompatible With Secondary Licenses", as
      defined by the Mozilla Public License, v. 2.0.`
    const PostgreSQLLicense=
    `Permission to use, copy, modify, and distribute this software and its documentation for any purpose, without fee, and without a written agreement is hereby granted, provided that the above copyright notice and this paragraph and the following two paragraphs appear in all copies.

    IN NO EVENT SHALL $ORGANISATION BE LIABLE TO ANY PARTY FOR DIRECT, INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, ARISING OUT OF THE USE OF THIS SOFTWARE AND ITS DOCUMENTATION, EVEN IF $ORGANISATION HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    
    $ORGANISATION SPECIFICALLY DISCLAIMS ANY WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE SOFTWARE PROVIDED HEREUNDER IS ON AN “AS IS” BASIS, AND $ORGANISATION HAS NO OBLIGATIONS TO PROVIDE MAINTENANCE, SUPPORT, UPDATES, ENHANCEMENTS, OR MODIFICATIONS.
    
    Join Us
    `
    const TheArtisticLicense=
    `Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.

    Preamble
    
    This license establishes the terms under which a given free software Package may be copied, modified, distributed, and/or redistributed. The intent is that the Copyright Holder maintains some artistic control over the development of that Package while still keeping the Package available as open source and free software.
    
    You are always permitted to make arrangements wholly outside of this license directly with the Copyright Holder of a given Package. If the terms of this license do not permit the full use that you propose to make of the Package, you should contact the Copyright Holder and seek a different licensing arrangement.
    
    Definitions
    
    "Copyright Holder" means the individual(s) or organization(s) named in the copyright notice for the entire Package.
    
    "Contributor" means any party that has contributed code or other material to the Package, in accordance with the Copyright Holder's procedures.
    
    "You" and "your" means any person who would like to copy, distribute, or modify the Package.
    
    "Package" means the collection of files distributed by the Copyright Holder, and derivatives of that collection and/or of those files. A given Package may consist of either the Standard Version, or a Modified Version.
    
    "Distribute" means providing a copy of the Package or making it accessible to anyone else, or in the case of a company or organization, to others outside of your company or organization.
    
    "Distributor Fee" means any fee that you charge for Distributing this Package or providing support for this Package to another party. It does not mean licensing fees.
    
    "Standard Version" refers to the Package if it has not been modified, or has been modified only in ways explicitly requested by the Copyright Holder.
    
    "Modified Version" means the Package, if it has been changed, and such changes were not explicitly requested by the Copyright Holder.
    
    "Original License" means this Artistic License as Distributed with the Standard Version of the Package, in its current version or as it may be modified by The Perl Foundation in the future.
    
    "Source" form means the source code, documentation source, and configuration files for the Package.
    
    "Compiled" form means the compiled bytecode, object code, binary, or any other form resulting from mechanical transformation or translation of the Source form.
    
    Permission for Use and Modification Without Distribution
    
    (1) You are permitted to use the Standard Version and create and use Modified Versions for any purpose without restriction, provided that you do not Distribute the Modified Version.
    Permissions for Redistribution of the Standard Version
    
    (2) You may Distribute verbatim copies of the Source form of the Standard Version of this Package in any medium without restriction, either gratis or for a Distributor Fee, provided that you duplicate all of the original copyright notices and associated disclaimers. At your discretion, such verbatim copies may or may not include a Compiled form of the Package.
    (3) You may apply any bug fixes, portability changes, and other modifications made available from the Copyright Holder. The resulting Package will still be considered the Standard Version, and as such will be subject to the Original License.
    Distribution of Modified Versions of the Package as Source
    
    (4) You may Distribute your Modified Version as Source (either gratis or for a Distributor Fee, and with or without a Compiled form of the Modified Version) provided that you clearly document how it differs from the Standard Version, including, but not limited to, documenting any non-standard features, executables, or modules, and provided that you do at least ONE of the following:
    (a) make the Modified Version available to the Copyright Holder of the Standard Version, under the Original License, so that the Copyright Holder may include your modifications in the Standard Version.
    (b) ensure that installation of your Modified Version does not prevent the user installing or running the Standard Version. In addition, the Modified Version must bear a name that is different from the name of the Standard Version.
    (c) allow anyone who receives a copy of the Modified Version to make the Source form of the Modified Version available to others under
    (i) the Original License or
    (ii) a license that permits the licensee to freely copy, modify and redistribute the Modified Version using the same licensing terms that apply to the copy that the licensee received, and requires that the Source form of the Modified Version, and of any works derived from it, be made freely available in that license fees are prohibited but Distributor Fees are allowed.
    Distribution of Compiled Forms of the Standard Version or Modified Versions without the Source
    
    (5) You may Distribute Compiled forms of the Standard Version without the Source, provided that you include complete instructions on how to get the Source of the Standard Version. Such instructions must be valid at the time of your distribution. If these instructions, at any time while you are carrying out such distribution, become invalid, you must provide new instructions on demand or cease further distribution. If you provide valid instructions or cease distribution within thirty days after you become aware that the instructions are invalid, then you do not forfeit any of your rights under this license.
    (6) You may Distribute a Modified Version in Compiled form without the Source, provided that you comply with Section 4 with respect to the Source of the Modified Version.
    Aggregating or Linking the Package
    
    (7) You may aggregate the Package (either the Standard Version or Modified Version) with other packages and Distribute the resulting aggregation provided that you do not charge a licensing fee for the Package. Distributor Fees are permitted, and licensing fees for other components in the aggregation are permitted. The terms of this license apply to the use and Distribution of the Standard or Modified Versions as included in the aggregation.
    (8) You are permitted to link Modified and Standard Versions with other works, to embed the Package in a larger work of your own, or to build stand-alone binary or bytecode versions of applications that include the Package, and Distribute the result without restriction, provided the result does not expose a direct interface to the Package.
    Items That are Not Considered Part of a Modified Version
    
    (9) Works (including, but not limited to, modules and scripts) that merely extend or make use of the Package, do not, by themselves, cause the Package to be a Modified Version. In addition, such works are not considered parts of the Package itself, and are not subject to the terms of this license.
    General Provisions
    
    (10) Any use, modification, and distribution of the Standard or Modified Versions is governed by this Artistic License. By using, modifying or distributing the Package, you accept this license. Do not use, modify, or distribute the Package, if you do not accept this license.
    (11) If your Modified Version has been derived from a Modified Version made by someone other than you, you are nevertheless required to ensure that your Modified Version complies with the requirements of this license.
    (12) This license does not grant you the right to use any trademark, service mark, tradename, or logo of the Copyright Holder.
    (13) This license includes the non-exclusive, worldwide, free-of-charge patent license to make, have made, use, offer to sell, sell, import and otherwise transfer the Package with respect to any patent claims licensable by the Copyright Holder that are necessarily infringed by the Package. If you institute patent litigation (including a cross-claim or counterclaim) against any party alleging that the Package constitutes direct or contributory patent infringement, then this Artistic License to you shall terminate on the date that such litigation is filed.
    (14) Disclaimer of Warranty:
    THE PACKAGE IS PROVIDED BY THE COPYRIGHT HOLDER AND CONTRIBUTORS "AS IS" AND WITHOUT ANY EXPRESS OR IMPLIED WARRANTIES. THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT ARE DISCLAIMED TO THE EXTENT PERMITTED BY YOUR LOCAL LAW. UNLESS REQUIRED BY LAW, NO COPYRIGHT HOLDER OR CONTRIBUTOR WILL BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES ARISING IN ANY WAY OUT OF THE USE OF THE PACKAGE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`
    const MicrosoftPublicLicense=
    `This license governs use of the accompanying software. If you use the software, you accept this license. If you do not accept the license, do not use the software.

    1. Definitions
    The terms "reproduce," "reproduction," "derivative works," and "distribution" have the same meaning here as under U.S. copyright law. A "contribution" is the original software, or any additions or changes to the software. A "contributor" is any person that distributes its contribution under this license. "Licensed patents" are a contributor's patent claims that read directly on its contribution.
    2. Grant of Rights
    (A) Copyright Grant- Subject to the terms of this license, including the license conditions and limitations in section 3, each contributor grants you a non-exclusive, worldwide, royalty-free copyright license to reproduce its contribution, prepare derivative works of its contribution, and distribute its contribution or any derivative works that you create.
    (B) Patent Grant- Subject to the terms of this license, including the license conditions and limitations in section 3, each contributor grants you a non-exclusive, worldwide, royalty-free license under its licensed patents to make, have made, use, sell, offer for sale, import, and/or otherwise dispose of its contribution in the software or derivative works of the contribution in the software.
    3. Conditions and Limitations
    (A) No Trademark License- This license does not grant you rights to use any contributors' name, logo, or trademarks.
    (B) If you bring a patent claim against any contributor over patents that you claim are infringed by the software, your patent license from such contributor to the software ends automatically.
    (C) If you distribute any portion of the software, you must retain all copyright, patent, trademark, and attribution notices that are present in the software.
    (D) If you distribute any portion of the software in source code form, you may do so only under this license by including a complete copy of this license with your distribution. If you distribute any portion of the software in compiled or object code form, you may only do so under a license that complies with this license.
    (E) The software is licensed "as-is." You bear the risk of using it. The contributors give no express warranties, guarantees, or conditions. You may have additional consumer rights under your local laws which this license cannot change. To the extent permitted under your local laws, the contributors exclude the implied warranties of merchantability, fitness for a particular purpose and non-infringement.`
// }