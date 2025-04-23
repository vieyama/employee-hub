import { Injectable, signal } from '@angular/core';
import { Employee, Group, Position } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeesSignal = signal<Employee[]>([]);
  private groupsSignal = signal<Group[]>([]);
  private positionsSignal = signal<Position[]>([]);

  // Mock data
  private mockEmployees: Employee[] = [{
    "id": 1,
    "username": "katheis0",
    "firstName": "Kermie",
    "lastName": "Atheis",
    "email": "katheis0@icq.com",
    "birthDate": "1994-10-25",
    "basicSalary": 6584194,
    "position": "UI Designer",
    "group": "Marketing",
    "profileImage": "https://robohash.org/doloremcumlaudantium.png?size=100x100&set=set1",
    "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    "status": "inactive"
  }, {
    "id": 2,
    "username": "fnorthcott1",
    "firstName": "Finlay",
    "lastName": "Northcott",
    "email": "fnorthcott1@smh.com.au",
    "birthDate": "2001-02-23",
    "basicSalary": 8734512,
    "position": "Software Engineer",
    "group": "Finance",
    "profileImage": "https://robohash.org/impeditsolutaculpa.png?size=100x100&set=set1",
    "description": "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
    "status": "active"
  }, {
    "id": 3,
    "username": "mtomovic2",
    "firstName": "Mignon",
    "lastName": "Tomovic",
    "email": "mtomovic2@nymag.com",
    "birthDate": "2000-04-17",
    "basicSalary": 5503928,
    "position": "Marketing Specialist",
    "group": "Product",
    "profileImage": "https://robohash.org/estvoluptatemollitia.png?size=100x100&set=set1",
    "description": "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    "status": "active"
  }, {
    "id": 4,
    "username": "jkeatch3",
    "firstName": "Jeanne",
    "lastName": "Keatch",
    "email": "jkeatch3@salon.com",
    "birthDate": "2000-01-20",
    "basicSalary": 6530329,
    "position": "UI Designer",
    "group": "Engineering",
    "profileImage": "https://robohash.org/voluptatemperferendisvoluptas.png?size=100x100&set=set1",
    "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
    "status": "inactive"
  }, {
    "id": 5,
    "username": "zmorrell4",
    "firstName": "Zared",
    "lastName": "Morrell",
    "email": "zmorrell4@miitbeian.gov.cn",
    "birthDate": "1999-10-02",
    "basicSalary": 8394230,
    "position": "Software Engineer",
    "group": "Human Resources",
    "profileImage": "https://robohash.org/eosateos.png?size=100x100&set=set1",
    "description": "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    "status": "on-leave"
  }, {
    "id": 6,
    "username": "aquarrington5",
    "firstName": "Angelica",
    "lastName": "Quarrington",
    "email": "aquarrington5@networksolutions.com",
    "birthDate": "1998-10-01",
    "basicSalary": 7603664,
    "position": "Senior Software Engineer",
    "group": "Finance",
    "profileImage": "https://robohash.org/reprehenderitvitaeut.png?size=100x100&set=set1",
    "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    "status": "inactive"
  }, {
    "id": 7,
    "username": "hlidgett6",
    "firstName": "Halette",
    "lastName": "Lidgett",
    "email": "hlidgett6@reverbnation.com",
    "birthDate": "2003-04-26",
    "basicSalary": 9056120,
    "position": "Financial Analyst",
    "group": "Finance",
    "profileImage": "https://robohash.org/voluptasvitaesint.png?size=100x100&set=set1",
    "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    "status": "inactive"
  }, {
    "id": 8,
    "username": "emowling7",
    "firstName": "Edwina",
    "lastName": "Mowling",
    "email": "emowling7@sitemeter.com",
    "birthDate": "1997-12-05",
    "basicSalary": 6098799,
    "position": "Senior Software Engineer",
    "group": "Design",
    "profileImage": "https://robohash.org/exercitationemdictapraesentium.png?size=100x100&set=set1",
    "description": "Aliquam erat volutpat. In congue. Etiam justo.",
    "status": "on-leave"
  }, {
    "id": 9,
    "username": "chilley8",
    "firstName": "Cece",
    "lastName": "Hilley",
    "email": "chilley8@sciencedirect.com",
    "birthDate": "1994-03-23",
    "basicSalary": 9464270,
    "position": "HR Manager",
    "group": "Human Resources",
    "profileImage": "https://robohash.org/commodiautsit.png?size=100x100&set=set1",
    "description": "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    "status": "on-leave"
  }, {
    "id": 10,
    "username": "esanti9",
    "firstName": "Eartha",
    "lastName": "Santi",
    "email": "esanti9@samsung.com",
    "birthDate": "2001-04-07",
    "basicSalary": 5293339,
    "position": "UX Designer",
    "group": "Operations",
    "profileImage": "https://robohash.org/voluptatibusdelenitiquidem.png?size=100x100&set=set1",
    "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    "status": "inactive"
  }, {
    "id": 11,
    "username": "ldmytryka",
    "firstName": "Leticia",
    "lastName": "Dmytryk",
    "email": "ldmytryka@squidoo.com",
    "birthDate": "1998-10-23",
    "basicSalary": 6814429,
    "position": "Software Engineer",
    "group": "Operations",
    "profileImage": "https://robohash.org/accusamuseumratione.png?size=100x100&set=set1",
    "description": "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    "status": "active"
  }, {
    "id": 12,
    "username": "vmackiesonb",
    "firstName": "Von",
    "lastName": "Mackieson",
    "email": "vmackiesonb@oracle.com",
    "birthDate": "2004-08-21",
    "basicSalary": 5477134,
    "position": "Financial Analyst",
    "group": "Marketing",
    "profileImage": "https://robohash.org/doloribussaepeofficia.png?size=100x100&set=set1",
    "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    "status": "on-leave"
  }, {
    "id": 13,
    "username": "gpauncefortc",
    "firstName": "Guntar",
    "lastName": "Pauncefort",
    "email": "gpauncefortc@adobe.com",
    "birthDate": "2005-10-18",
    "basicSalary": 8623447,
    "position": "Marketing Specialist",
    "group": "Human Resources",
    "profileImage": "https://robohash.org/autautrerum.png?size=100x100&set=set1",
    "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    "status": "on-leave"
  }, {
    "id": 14,
    "username": "fmcgarrahand",
    "firstName": "Flory",
    "lastName": "McGarrahan",
    "email": "fmcgarrahand@list-manage.com",
    "birthDate": "2005-12-26",
    "basicSalary": 9911035,
    "position": "Product Manager",
    "group": "Operations",
    "profileImage": "https://robohash.org/porroquodvoluptas.png?size=100x100&set=set1",
    "description": "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    "status": "on-leave"
  }, {
    "id": 15,
    "username": "aeisikowitze",
    "firstName": "Ardelis",
    "lastName": "Eisikowitz",
    "email": "aeisikowitze@chronoengine.com",
    "birthDate": "2003-09-06",
    "basicSalary": 6284340,
    "position": "Software Engineer",
    "group": "Human Resources",
    "profileImage": "https://robohash.org/consequuntursuntmaxime.png?size=100x100&set=set1",
    "description": "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    "status": "active"
  }, {
    "id": 16,
    "username": "ssanperef",
    "firstName": "Sukey",
    "lastName": "Sanpere",
    "email": "ssanperef@globo.com",
    "birthDate": "2003-06-20",
    "basicSalary": 5497501,
    "position": "HR Manager",
    "group": "Human Resources",
    "profileImage": "https://robohash.org/aliquidoditaut.png?size=100x100&set=set1",
    "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
    "status": "inactive"
  }, {
    "id": 17,
    "username": "cjellisg",
    "firstName": "Cyrille",
    "lastName": "Jellis",
    "email": "cjellisg@hatena.ne.jp",
    "birthDate": "2002-11-24",
    "basicSalary": 5908943,
    "position": "Financial Analyst",
    "group": "Human Resources",
    "profileImage": "https://robohash.org/minimamollitiaquia.png?size=100x100&set=set1",
    "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    "status": "inactive"
  }, {
    "id": 18,
    "username": "plandish",
    "firstName": "Packston",
    "lastName": "Landis",
    "email": "plandish@google.ru",
    "birthDate": "1995-08-22",
    "basicSalary": 7871058,
    "position": "Senior Software Engineer",
    "group": "Product",
    "profileImage": "https://robohash.org/adquidolores.png?size=100x100&set=set1",
    "description": "In quis justo. Maecenas rhoncus aliquam lacus.",
    "status": "on-leave"
  }, {
    "id": 19,
    "username": "bsanfordi",
    "firstName": "Bryna",
    "lastName": "Sanford",
    "email": "bsanfordi@ibm.com",
    "birthDate": "2004-02-10",
    "basicSalary": 8757450,
    "position": "Marketing Specialist",
    "group": "Engineering",
    "profileImage": "https://robohash.org/architectoquisconsequuntur.png?size=100x100&set=set1",
    "description": "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    "status": "on-leave"
  }, {
    "id": 20,
    "username": "ebroadj",
    "firstName": "Elyssa",
    "lastName": "Broad",
    "email": "ebroadj@netvibes.com",
    "birthDate": "2004-12-09",
    "basicSalary": 5124036,
    "position": "Product Manager",
    "group": "Product",
    "profileImage": "https://robohash.org/odionesciuntvoluptatem.png?size=100x100&set=set1",
    "description": "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    "status": "active"
  }, {
    "id": 21,
    "username": "ncarayolk",
    "firstName": "Nikki",
    "lastName": "Carayol",
    "email": "ncarayolk@printfriendly.com",
    "birthDate": "1998-11-03",
    "basicSalary": 7322639,
    "position": "Financial Analyst",
    "group": "Human Resources",
    "profileImage": "https://robohash.org/nostrumdictaeveniet.png?size=100x100&set=set1",
    "description": "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "status": "inactive"
  }, {
    "id": 22,
    "username": "jrubyl",
    "firstName": "Jerri",
    "lastName": "Ruby",
    "email": "jrubyl@multiply.com",
    "birthDate": "2002-07-31",
    "basicSalary": 8855783,
    "position": "Senior Software Engineer",
    "group": "Engineering",
    "profileImage": "https://robohash.org/debitisveritatisqui.png?size=100x100&set=set1",
    "description": "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    "status": "inactive"
  }, {
    "id": 23,
    "username": "pchacem",
    "firstName": "Parke",
    "lastName": "Chace",
    "email": "pchacem@ustream.tv",
    "birthDate": "2000-06-05",
    "basicSalary": 8736363,
    "position": "Senior Software Engineer",
    "group": "Design",
    "profileImage": "https://robohash.org/ipsamexpeditaperspiciatis.png?size=100x100&set=set1",
    "description": "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "status": "inactive"
  }, {
    "id": 24,
    "username": "okenefickn",
    "firstName": "Ozzie",
    "lastName": "Kenefick",
    "email": "okenefickn@webmd.com",
    "birthDate": "2003-09-24",
    "basicSalary": 8977230,
    "position": "UI Designer",
    "group": "Product",
    "profileImage": "https://robohash.org/blanditiisdelectusminima.png?size=100x100&set=set1",
    "description": "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    "status": "on-leave"
  }, {
    "id": 25,
    "username": "jfeasbyo",
    "firstName": "Jewelle",
    "lastName": "Feasby",
    "email": "jfeasbyo@apple.com",
    "birthDate": "2002-05-12",
    "basicSalary": 5646029,
    "position": "Product Manager",
    "group": "Marketing",
    "profileImage": "https://robohash.org/exercitationemsaepeexplicabo.png?size=100x100&set=set1",
    "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    "status": "active"
  }, {
    "id": 26,
    "username": "rtrobridgep",
    "firstName": "Remus",
    "lastName": "Trobridge",
    "email": "rtrobridgep@meetup.com",
    "birthDate": "2003-10-05",
    "basicSalary": 7927579,
    "position": "Financial Analyst",
    "group": "Finance",
    "profileImage": "https://robohash.org/nonestdistinctio.png?size=100x100&set=set1",
    "description": "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
    "status": "inactive"
  }, {
    "id": 27,
    "username": "mcampesq",
    "firstName": "Maighdiln",
    "lastName": "Campes",
    "email": "mcampesq@dedecms.com",
    "birthDate": "2002-11-15",
    "basicSalary": 9969500,
    "position": "UX Designer",
    "group": "Human Resources",
    "profileImage": "https://robohash.org/etutveritatis.png?size=100x100&set=set1",
    "description": "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    "status": "active"
  }, {
    "id": 28,
    "username": "ebucklesr",
    "firstName": "Elbert",
    "lastName": "Buckles",
    "email": "ebucklesr@ed.gov",
    "birthDate": "1999-10-03",
    "basicSalary": 6175754,
    "position": "Operations Manager",
    "group": "Design",
    "profileImage": "https://robohash.org/ututtempora.png?size=100x100&set=set1",
    "description": "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
    "status": "on-leave"
  }, {
    "id": 29,
    "username": "imachanss",
    "firstName": "Ingrim",
    "lastName": "Machans",
    "email": "imachanss@pcworld.com",
    "birthDate": "2003-08-28",
    "basicSalary": 5719862,
    "position": "UX Designer",
    "group": "Design",
    "profileImage": "https://robohash.org/undenatuslabore.png?size=100x100&set=set1",
    "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    "status": "inactive"
  }, {
    "id": 30,
    "username": "hcurnokt",
    "firstName": "Harmonia",
    "lastName": "Curnok",
    "email": "hcurnokt@dailymotion.com",
    "birthDate": "2004-07-30",
    "basicSalary": 8523489,
    "position": "HR Manager",
    "group": "Marketing",
    "profileImage": "https://robohash.org/isteassumendaodio.png?size=100x100&set=set1",
    "description": "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
    "status": "on-leave"
  }, {
    "id": 31,
    "username": "nhatchu",
    "firstName": "Nick",
    "lastName": "Hatch",
    "email": "nhatchu@bloglines.com",
    "birthDate": "1996-10-03",
    "basicSalary": 8550335,
    "position": "Product Manager",
    "group": "Design",
    "profileImage": "https://robohash.org/quirerumquas.png?size=100x100&set=set1",
    "description": "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
    "status": "inactive"
  }, {
    "id": 32,
    "username": "cblampiedv",
    "firstName": "Colet",
    "lastName": "Blampied",
    "email": "cblampiedv@senate.gov",
    "birthDate": "2004-12-18",
    "basicSalary": 7319865,
    "position": "Operations Manager",
    "group": "Finance",
    "profileImage": "https://robohash.org/officiisexfacilis.png?size=100x100&set=set1",
    "description": "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    "status": "active"
  }, {
    "id": 33,
    "username": "jcostyw",
    "firstName": "Julianna",
    "lastName": "Costy",
    "email": "jcostyw@cdbaby.com",
    "birthDate": "1995-12-09",
    "basicSalary": 8933076,
    "position": "Senior Software Engineer",
    "group": "Design",
    "profileImage": "https://robohash.org/rerumsedsequi.png?size=100x100&set=set1",
    "description": "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    "status": "inactive"
  }, {
    "id": 34,
    "username": "srazouxx",
    "firstName": "Sheeree",
    "lastName": "Razoux",
    "email": "srazouxx@alexa.com",
    "birthDate": "2002-02-18",
    "basicSalary": 7890667,
    "position": "UX Designer",
    "group": "Product",
    "profileImage": "https://robohash.org/fugiatoptiovero.png?size=100x100&set=set1",
    "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    "status": "on-leave"
  }, {
    "id": 35,
    "username": "agissopy",
    "firstName": "Addie",
    "lastName": "Gissop",
    "email": "agissopy@blinklist.com",
    "birthDate": "2000-02-29",
    "basicSalary": 7700977,
    "position": "UI Designer",
    "group": "Product",
    "profileImage": "https://robohash.org/sitautofficia.png?size=100x100&set=set1",
    "description": "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
    "status": "on-leave"
  }, {
    "id": 36,
    "username": "mbunstonz",
    "firstName": "Mylo",
    "lastName": "Bunston",
    "email": "mbunstonz@uol.com.br",
    "birthDate": "1994-11-14",
    "basicSalary": 7349257,
    "position": "Operations Manager",
    "group": "Finance",
    "profileImage": "https://robohash.org/quisquamutrerum.png?size=100x100&set=set1",
    "description": "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    "status": "inactive"
  }, {
    "id": 37,
    "username": "kcharke10",
    "firstName": "Keith",
    "lastName": "Charke",
    "email": "kcharke10@myspace.com",
    "birthDate": "1994-04-29",
    "basicSalary": 8894770,
    "position": "Marketing Specialist",
    "group": "Human Resources",
    "profileImage": "https://robohash.org/eligendiducimusplaceat.png?size=100x100&set=set1",
    "description": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    "status": "on-leave"
  }, {
    "id": 38,
    "username": "pbernini11",
    "firstName": "Patty",
    "lastName": "Bernini",
    "email": "pbernini11@sohu.com",
    "birthDate": "1999-02-19",
    "basicSalary": 6210879,
    "position": "HR Manager",
    "group": "Human Resources",
    "profileImage": "https://robohash.org/etmolestiasut.png?size=100x100&set=set1",
    "description": "Nullam varius. Nulla facilisi.",
    "status": "inactive"
  }, {
    "id": 39,
    "username": "achurchyard12",
    "firstName": "Anson",
    "lastName": "Churchyard",
    "email": "achurchyard12@google.com.hk",
    "birthDate": "2003-10-27",
    "basicSalary": 9977282,
    "position": "Financial Analyst",
    "group": "Human Resources",
    "profileImage": "https://robohash.org/consequaturmagnamdistinctio.png?size=100x100&set=set1",
    "description": "Quisque ut erat. Curabitur gravida nisi at nibh.",
    "status": "on-leave"
  }, {
    "id": 40,
    "username": "nroust13",
    "firstName": "Nikki",
    "lastName": "Roust",
    "email": "nroust13@loc.gov",
    "birthDate": "1994-09-05",
    "basicSalary": 8842194,
    "position": "UX Designer",
    "group": "Finance",
    "profileImage": "https://robohash.org/reiciendisutexplicabo.png?size=100x100&set=set1",
    "description": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    "status": "inactive"
  }, {
    "id": 41,
    "username": "ebarrow14",
    "firstName": "Emma",
    "lastName": "Barrow",
    "email": "ebarrow14@state.gov",
    "birthDate": "1996-11-23",
    "basicSalary": 6961187,
    "position": "HR Manager",
    "group": "Product",
    "profileImage": "https://robohash.org/quibusdamnumquamquia.png?size=100x100&set=set1",
    "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    "status": "active"
  }, {
    "id": 42,
    "username": "apendrid15",
    "firstName": "Alexina",
    "lastName": "Pendrid",
    "email": "apendrid15@rakuten.co.jp",
    "birthDate": "1999-05-30",
    "basicSalary": 5395469,
    "position": "Marketing Specialist",
    "group": "Design",
    "profileImage": "https://robohash.org/aatqueblanditiis.png?size=100x100&set=set1",
    "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    "status": "active"
  }, {
    "id": 43,
    "username": "iparram16",
    "firstName": "Ingrid",
    "lastName": "Parram",
    "email": "iparram16@zimbio.com",
    "birthDate": "2000-04-23",
    "basicSalary": 6673314,
    "position": "UX Designer",
    "group": "Marketing",
    "profileImage": "https://robohash.org/sedenimdolor.png?size=100x100&set=set1",
    "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
    "status": "on-leave"
  }, {
    "id": 44,
    "username": "cwhitten17",
    "firstName": "Crawford",
    "lastName": "Whitten",
    "email": "cwhitten17@sfgate.com",
    "birthDate": "1998-01-26",
    "basicSalary": 8230197,
    "position": "Product Manager",
    "group": "Marketing",
    "profileImage": "https://robohash.org/autrerumconsequatur.png?size=100x100&set=set1",
    "description": "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    "status": "active"
  }, {
    "id": 45,
    "username": "flainton18",
    "firstName": "Franciska",
    "lastName": "Lainton",
    "email": "flainton18@a8.net",
    "birthDate": "1995-10-07",
    "basicSalary": 5749116,
    "position": "HR Manager",
    "group": "Finance",
    "profileImage": "https://robohash.org/consequunturdoloribusvel.png?size=100x100&set=set1",
    "description": "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    "status": "on-leave"
  }, {
    "id": 46,
    "username": "cbeetham19",
    "firstName": "Cara",
    "lastName": "Beetham",
    "email": "cbeetham19@seattletimes.com",
    "birthDate": "2001-07-29",
    "basicSalary": 5136129,
    "position": "Senior Software Engineer",
    "group": "Marketing",
    "profileImage": "https://robohash.org/harumquisquamet.png?size=100x100&set=set1",
    "description": "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
    "status": "active"
  }, {
    "id": 47,
    "username": "cmcpeice1a",
    "firstName": "Cinnamon",
    "lastName": "McPeice",
    "email": "cmcpeice1a@shinystat.com",
    "birthDate": "1996-12-08",
    "basicSalary": 7268242,
    "position": "Financial Analyst",
    "group": "Marketing",
    "profileImage": "https://robohash.org/solutadoloremlaborum.png?size=100x100&set=set1",
    "description": "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
    "status": "inactive"
  }, {
    "id": 48,
    "username": "qcrossby1b",
    "firstName": "Quentin",
    "lastName": "Crossby",
    "email": "qcrossby1b@illinois.edu",
    "birthDate": "1996-01-30",
    "basicSalary": 8250041,
    "position": "Product Manager",
    "group": "Operations",
    "profileImage": "https://robohash.org/providentnemodistinctio.png?size=100x100&set=set1",
    "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    "status": "on-leave"
  }, {
    "id": 49,
    "username": "lnorres1c",
    "firstName": "Lorin",
    "lastName": "Norres",
    "email": "lnorres1c@statcounter.com",
    "birthDate": "2000-08-25",
    "basicSalary": 6809882,
    "position": "HR Manager",
    "group": "Operations",
    "profileImage": "https://robohash.org/eaexrerum.png?size=100x100&set=set1",
    "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    "status": "active"
  }, {
    "id": 50,
    "username": "kthorn1d",
    "firstName": "Kirstyn",
    "lastName": "Thorn",
    "email": "kthorn1d@seattletimes.com",
    "birthDate": "2003-10-11",
    "basicSalary": 7984797,
    "position": "Product Manager",
    "group": "Operations",
    "profileImage": "https://robohash.org/quosnihilnon.png?size=100x100&set=set1",
    "description": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    "status": "active"
  }, {
    "id": 51,
    "username": "frominov1e",
    "firstName": "Frannie",
    "lastName": "Rominov",
    "email": "frominov1e@army.mil",
    "birthDate": "1994-09-10",
    "basicSalary": 8655138,
    "position": "HR Manager",
    "group": "Engineering",
    "profileImage": "https://robohash.org/consequaturestipsa.png?size=100x100&set=set1",
    "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
    "status": "inactive"
  }, {
    "id": 52,
    "username": "kmullen1f",
    "firstName": "Kristofor",
    "lastName": "Mullen",
    "email": "kmullen1f@huffingtonpost.com",
    "birthDate": "2003-03-20",
    "basicSalary": 9647011,
    "position": "UX Designer",
    "group": "Engineering",
    "profileImage": "https://robohash.org/earerumquia.png?size=100x100&set=set1",
    "description": "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    "status": "active"
  }, {
    "id": 53,
    "username": "glawty1g",
    "firstName": "Gaultiero",
    "lastName": "Lawty",
    "email": "glawty1g@fastcompany.com",
    "birthDate": "2002-10-31",
    "basicSalary": 9126466,
    "position": "Senior Software Engineer",
    "group": "Operations",
    "profileImage": "https://robohash.org/nihilcommodisunt.png?size=100x100&set=set1",
    "description": "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    "status": "on-leave"
  }, {
    "id": 54,
    "username": "blarvin1h",
    "firstName": "Bunnie",
    "lastName": "Larvin",
    "email": "blarvin1h@twitpic.com",
    "birthDate": "2001-08-08",
    "basicSalary": 7597064,
    "position": "Marketing Specialist",
    "group": "Operations",
    "profileImage": "https://robohash.org/sitexcepturiomnis.png?size=100x100&set=set1",
    "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    "status": "active"
  }, {
    "id": 55,
    "username": "ghallgate1i",
    "firstName": "Gayelord",
    "lastName": "Hallgate",
    "email": "ghallgate1i@hugedomains.com",
    "birthDate": "1997-07-21",
    "basicSalary": 6418348,
    "position": "UX Designer",
    "group": "Human Resources",
    "profileImage": "https://robohash.org/dolorsimiliqueet.png?size=100x100&set=set1",
    "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
    "status": "inactive"
  }, {
    "id": 56,
    "username": "lpetrowsky1j",
    "firstName": "Lotta",
    "lastName": "Petrowsky",
    "email": "lpetrowsky1j@histats.com",
    "birthDate": "1996-05-28",
    "basicSalary": 8429631,
    "position": "Operations Manager",
    "group": "Human Resources",
    "profileImage": "https://robohash.org/impediteligendiitaque.png?size=100x100&set=set1",
    "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.",
    "status": "active"
  }, {
    "id": 57,
    "username": "photton1k",
    "firstName": "Perry",
    "lastName": "Hotton",
    "email": "photton1k@npr.org",
    "birthDate": "2005-03-19",
    "basicSalary": 8147383,
    "position": "Product Manager",
    "group": "Design",
    "profileImage": "https://robohash.org/ipsamvoluptatemquae.png?size=100x100&set=set1",
    "description": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    "status": "on-leave"
  }, {
    "id": 58,
    "username": "cdemange1l",
    "firstName": "Carmen",
    "lastName": "Demange",
    "email": "cdemange1l@princeton.edu",
    "birthDate": "1997-10-07",
    "basicSalary": 5322566,
    "position": "UX Designer",
    "group": "Marketing",
    "profileImage": "https://robohash.org/adestid.png?size=100x100&set=set1",
    "description": "Donec semper sapien a libero. Nam dui.",
    "status": "inactive"
  }, {
    "id": 59,
    "username": "lerrey1m",
    "firstName": "Leeanne",
    "lastName": "Errey",
    "email": "lerrey1m@rakuten.co.jp",
    "birthDate": "1995-11-09",
    "basicSalary": 6392598,
    "position": "Product Manager",
    "group": "Product",
    "profileImage": "https://robohash.org/fugaminuseos.png?size=100x100&set=set1",
    "description": "Nullam varius.",
    "status": "active"
  }, {
    "id": 60,
    "username": "rfawltey1n",
    "firstName": "Romeo",
    "lastName": "Fawltey",
    "email": "rfawltey1n@bravesites.com",
    "birthDate": "1995-10-05",
    "basicSalary": 6154951,
    "position": "Financial Analyst",
    "group": "Marketing",
    "profileImage": "https://robohash.org/enimquoharum.png?size=100x100&set=set1",
    "description": "Pellentesque at nulla.",
    "status": "inactive"
  }, {
    "id": 61,
    "username": "ldodimead1o",
    "firstName": "Lenna",
    "lastName": "Dodimead",
    "email": "ldodimead1o@stumbleupon.com",
    "birthDate": "2005-04-18",
    "basicSalary": 6582651,
    "position": "Financial Analyst",
    "group": "Human Resources",
    "profileImage": "https://robohash.org/doloremomnisquia.png?size=100x100&set=set1",
    "description": "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    "status": "on-leave"
  }, {
    "id": 62,
    "username": "kbusch1p",
    "firstName": "Karola",
    "lastName": "Busch",
    "email": "kbusch1p@bigcartel.com",
    "birthDate": "2005-01-23",
    "basicSalary": 5212995,
    "position": "HR Manager",
    "group": "Finance",
    "profileImage": "https://robohash.org/sitnamofficiis.png?size=100x100&set=set1",
    "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    "status": "inactive"
  }, {
    "id": 63,
    "username": "jfairham1q",
    "firstName": "Jermaine",
    "lastName": "Fairham",
    "email": "jfairham1q@cbslocal.com",
    "birthDate": "2004-07-17",
    "basicSalary": 6681980,
    "position": "Software Engineer",
    "group": "Engineering",
    "profileImage": "https://robohash.org/sitcumconsequatur.png?size=100x100&set=set1",
    "description": "Curabitur convallis.",
    "status": "on-leave"
  }, {
    "id": 64,
    "username": "rmarkham1r",
    "firstName": "Robin",
    "lastName": "Markham",
    "email": "rmarkham1r@hugedomains.com",
    "birthDate": "2002-12-07",
    "basicSalary": 8064330,
    "position": "Software Engineer",
    "group": "Marketing",
    "profileImage": "https://robohash.org/consectetureumquos.png?size=100x100&set=set1",
    "description": "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    "status": "inactive"
  }, {
    "id": 65,
    "username": "rstannering1s",
    "firstName": "Radcliffe",
    "lastName": "Stannering",
    "email": "rstannering1s@etsy.com",
    "birthDate": "1995-06-24",
    "basicSalary": 9773749,
    "position": "Product Manager",
    "group": "Human Resources",
    "profileImage": "https://robohash.org/officiisoptiomollitia.png?size=100x100&set=set1",
    "description": "Nullam sit amet turpis elementum ligula vehicula consequat.",
    "status": "on-leave"
  }, {
    "id": 66,
    "username": "jhacksby1t",
    "firstName": "Jeremias",
    "lastName": "Hacksby",
    "email": "jhacksby1t@independent.co.uk",
    "birthDate": "2002-10-14",
    "basicSalary": 8878031,
    "position": "Product Manager",
    "group": "Finance",
    "profileImage": "https://robohash.org/rerumatqueea.png?size=100x100&set=set1",
    "description": "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    "status": "on-leave"
  }, {
    "id": 67,
    "username": "cruusa1u",
    "firstName": "Cayla",
    "lastName": "Ruusa",
    "email": "cruusa1u@phoca.cz",
    "birthDate": "2002-12-17",
    "basicSalary": 7120327,
    "position": "UX Designer",
    "group": "Product",
    "profileImage": "https://robohash.org/cumvelest.png?size=100x100&set=set1",
    "description": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
    "status": "inactive"
  }, {
    "id": 68,
    "username": "hragsdale1v",
    "firstName": "Harli",
    "lastName": "Ragsdale",
    "email": "hragsdale1v@so-net.ne.jp",
    "birthDate": "2005-12-01",
    "basicSalary": 7626803,
    "position": "Operations Manager",
    "group": "Product",
    "profileImage": "https://robohash.org/officiavoluptatibusquam.png?size=100x100&set=set1",
    "description": "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
    "status": "inactive"
  }, {
    "id": 69,
    "username": "mmaestrini1w",
    "firstName": "Merridie",
    "lastName": "Maestrini",
    "email": "mmaestrini1w@diigo.com",
    "birthDate": "1997-04-03",
    "basicSalary": 5600539,
    "position": "Software Engineer",
    "group": "Engineering",
    "profileImage": "https://robohash.org/eligendiestvitae.png?size=100x100&set=set1",
    "description": "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
    "status": "active"
  }, {
    "id": 70,
    "username": "fenocksson1x",
    "firstName": "Filippo",
    "lastName": "Enocksson",
    "email": "fenocksson1x@netscape.com",
    "birthDate": "1996-05-18",
    "basicSalary": 5630236,
    "position": "Operations Manager",
    "group": "Engineering",
    "profileImage": "https://robohash.org/fugaiustosaepe.png?size=100x100&set=set1",
    "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    "status": "active"
  }, {
    "id": 71,
    "username": "nmcgivena1y",
    "firstName": "Netti",
    "lastName": "McGivena",
    "email": "nmcgivena1y@edublogs.org",
    "birthDate": "2003-03-24",
    "basicSalary": 8612367,
    "position": "HR Manager",
    "group": "Design",
    "profileImage": "https://robohash.org/nequeteneturnostrum.png?size=100x100&set=set1",
    "description": "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    "status": "inactive"
  }, {
    "id": 72,
    "username": "hrhydderch1z",
    "firstName": "Hermy",
    "lastName": "Rhydderch",
    "email": "hrhydderch1z@apple.com",
    "birthDate": "2003-08-05",
    "basicSalary": 5332350,
    "position": "HR Manager",
    "group": "Finance",
    "profileImage": "https://robohash.org/atinautem.png?size=100x100&set=set1",
    "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    "status": "inactive"
  }, {
    "id": 73,
    "username": "rsive20",
    "firstName": "Rea",
    "lastName": "Sive",
    "email": "rsive20@livejournal.com",
    "birthDate": "1995-11-03",
    "basicSalary": 7123212,
    "position": "Software Engineer",
    "group": "Operations",
    "profileImage": "https://robohash.org/accusamuspraesentiumnihil.png?size=100x100&set=set1",
    "description": "Duis mattis egestas metus. Aenean fermentum.",
    "status": "active"
  }, {
    "id": 74,
    "username": "ckordes21",
    "firstName": "Culley",
    "lastName": "Kordes",
    "email": "ckordes21@icio.us",
    "birthDate": "2000-12-29",
    "basicSalary": 8831713,
    "position": "UI Designer",
    "group": "Marketing",
    "profileImage": "https://robohash.org/errorquodvero.png?size=100x100&set=set1",
    "description": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    "status": "inactive"
  }, {
    "id": 75,
    "username": "imarusic22",
    "firstName": "Irvin",
    "lastName": "Marusic",
    "email": "imarusic22@yellowbook.com",
    "birthDate": "2004-12-31",
    "basicSalary": 7894046,
    "position": "Marketing Specialist",
    "group": "Design",
    "profileImage": "https://robohash.org/dignissimosestsint.png?size=100x100&set=set1",
    "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
    "status": "inactive"
  }, {
    "id": 76,
    "username": "cstockey23",
    "firstName": "Celia",
    "lastName": "Stockey",
    "email": "cstockey23@thetimes.co.uk",
    "birthDate": "1998-05-11",
    "basicSalary": 5514837,
    "position": "Financial Analyst",
    "group": "Finance",
    "profileImage": "https://robohash.org/dolorempraesentiumqui.png?size=100x100&set=set1",
    "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    "status": "inactive"
  }, {
    "id": 77,
    "username": "echishull24",
    "firstName": "Eunice",
    "lastName": "Chishull",
    "email": "echishull24@taobao.com",
    "birthDate": "2004-05-07",
    "basicSalary": 5349890,
    "position": "UX Designer",
    "group": "Marketing",
    "profileImage": "https://robohash.org/idmagniearum.png?size=100x100&set=set1",
    "description": "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    "status": "inactive"
  }, {
    "id": 78,
    "username": "gcurnokk25",
    "firstName": "Grant",
    "lastName": "Curnokk",
    "email": "gcurnokk25@nhs.uk",
    "birthDate": "2000-12-14",
    "basicSalary": 5404340,
    "position": "Product Manager",
    "group": "Operations",
    "profileImage": "https://robohash.org/natusetea.png?size=100x100&set=set1",
    "description": "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "status": "inactive"
  }, {
    "id": 79,
    "username": "lottawell26",
    "firstName": "Leonelle",
    "lastName": "Ottawell",
    "email": "lottawell26@goo.gl",
    "birthDate": "2005-12-20",
    "basicSalary": 5276615,
    "position": "UI Designer",
    "group": "Product",
    "profileImage": "https://robohash.org/similiquerepudiandaeaperiam.png?size=100x100&set=set1",
    "description": "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    "status": "on-leave"
  }, {
    "id": 80,
    "username": "bjoutapaitis27",
    "firstName": "Benedikta",
    "lastName": "Joutapaitis",
    "email": "bjoutapaitis27@vkontakte.ru",
    "birthDate": "2004-10-03",
    "basicSalary": 8549594,
    "position": "Financial Analyst",
    "group": "Engineering",
    "profileImage": "https://robohash.org/minusiditaque.png?size=100x100&set=set1",
    "description": "Cras non velit nec nisi vulputate nonummy.",
    "status": "active"
  }, {
    "id": 81,
    "username": "bcowlam28",
    "firstName": "Boigie",
    "lastName": "Cowlam",
    "email": "bcowlam28@wordpress.org",
    "birthDate": "1995-09-05",
    "basicSalary": 6172887,
    "position": "Marketing Specialist",
    "group": "Human Resources",
    "profileImage": "https://robohash.org/deseruntmolestiaemollitia.png?size=100x100&set=set1",
    "description": "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    "status": "on-leave"
  }, {
    "id": 82,
    "username": "cgilbank29",
    "firstName": "Cecilla",
    "lastName": "Gilbank",
    "email": "cgilbank29@google.com",
    "birthDate": "1994-08-02",
    "basicSalary": 7823428,
    "position": "Software Engineer",
    "group": "Marketing",
    "profileImage": "https://robohash.org/commodimolestiassunt.png?size=100x100&set=set1",
    "description": "Suspendisse potenti.",
    "status": "on-leave"
  }, {
    "id": 83,
    "username": "mmerida2a",
    "firstName": "Mia",
    "lastName": "Merida",
    "email": "mmerida2a@nbcnews.com",
    "birthDate": "1994-08-01",
    "basicSalary": 8373849,
    "position": "UX Designer",
    "group": "Finance",
    "profileImage": "https://robohash.org/velitnonmagnam.png?size=100x100&set=set1",
    "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    "status": "inactive"
  }, {
    "id": 84,
    "username": "fgoodsell2b",
    "firstName": "Farica",
    "lastName": "Goodsell",
    "email": "fgoodsell2b@smugmug.com",
    "birthDate": "2004-09-10",
    "basicSalary": 8584349,
    "position": "Product Manager",
    "group": "Human Resources",
    "profileImage": "https://robohash.org/quivoluptatemamet.png?size=100x100&set=set1",
    "description": "Sed sagittis.",
    "status": "inactive"
  }, {
    "id": 85,
    "username": "afrean2c",
    "firstName": "Amory",
    "lastName": "Frean",
    "email": "afrean2c@reverbnation.com",
    "birthDate": "1997-03-20",
    "basicSalary": 8616069,
    "position": "HR Manager",
    "group": "Operations",
    "profileImage": "https://robohash.org/dolorumdelenititotam.png?size=100x100&set=set1",
    "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    "status": "on-leave"
  }, {
    "id": 86,
    "username": "bcartlidge2d",
    "firstName": "Brinn",
    "lastName": "Cartlidge",
    "email": "bcartlidge2d@msu.edu",
    "birthDate": "2002-02-21",
    "basicSalary": 6069013,
    "position": "Senior Software Engineer",
    "group": "Design",
    "profileImage": "https://robohash.org/velitomnistempore.png?size=100x100&set=set1",
    "description": "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    "status": "active"
  }, {
    "id": 87,
    "username": "astandishbrooks2e",
    "firstName": "Athene",
    "lastName": "Standish-Brooks",
    "email": "astandishbrooks2e@naver.com",
    "birthDate": "1999-08-14",
    "basicSalary": 6694021,
    "position": "Marketing Specialist",
    "group": "Human Resources",
    "profileImage": "https://robohash.org/autautsit.png?size=100x100&set=set1",
    "description": "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    "status": "inactive"
  }, {
    "id": 88,
    "username": "schansonne2f",
    "firstName": "Silvan",
    "lastName": "Chansonne",
    "email": "schansonne2f@opera.com",
    "birthDate": "1997-07-11",
    "basicSalary": 7204492,
    "position": "Operations Manager",
    "group": "Product",
    "profileImage": "https://robohash.org/cupiditatesuntiusto.png?size=100x100&set=set1",
    "description": "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
    "status": "inactive"
  }, {
    "id": 89,
    "username": "rscamerdine2g",
    "firstName": "Ransell",
    "lastName": "Scamerdine",
    "email": "rscamerdine2g@yahoo.co.jp",
    "birthDate": "1998-04-30",
    "basicSalary": 8888714,
    "position": "Financial Analyst",
    "group": "Finance",
    "profileImage": "https://robohash.org/sedquammolestias.png?size=100x100&set=set1",
    "description": "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    "status": "active"
  }, {
    "id": 90,
    "username": "adixcee2h",
    "firstName": "Arlen",
    "lastName": "Dixcee",
    "email": "adixcee2h@flavors.me",
    "birthDate": "1998-07-10",
    "basicSalary": 5168821,
    "position": "UI Designer",
    "group": "Operations",
    "profileImage": "https://robohash.org/minusetvoluptatem.png?size=100x100&set=set1",
    "description": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    "status": "active"
  }, {
    "id": 91,
    "username": "erotlauf2i",
    "firstName": "Edita",
    "lastName": "Rotlauf",
    "email": "erotlauf2i@hostgator.com",
    "birthDate": "2001-03-29",
    "basicSalary": 8452676,
    "position": "Operations Manager",
    "group": "Engineering",
    "profileImage": "https://robohash.org/nobisrepudiandaeanimi.png?size=100x100&set=set1",
    "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    "status": "inactive"
  }, {
    "id": 92,
    "username": "mbiasetti2j",
    "firstName": "Mollee",
    "lastName": "Biasetti",
    "email": "mbiasetti2j@google.com.br",
    "birthDate": "2002-08-18",
    "basicSalary": 6843532,
    "position": "Operations Manager",
    "group": "Operations",
    "profileImage": "https://robohash.org/eximpeditbeatae.png?size=100x100&set=set1",
    "description": "Phasellus in felis. Donec semper sapien a libero.",
    "status": "active"
  }, {
    "id": 93,
    "username": "gsidaway2k",
    "firstName": "Gwenora",
    "lastName": "Sidaway",
    "email": "gsidaway2k@shareasale.com",
    "birthDate": "1997-12-15",
    "basicSalary": 6926357,
    "position": "HR Manager",
    "group": "Design",
    "profileImage": "https://robohash.org/suntperspiciatismolestiae.png?size=100x100&set=set1",
    "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    "status": "active"
  }, {
    "id": 94,
    "username": "lbagguley2l",
    "firstName": "Lind",
    "lastName": "Bagguley",
    "email": "lbagguley2l@indiatimes.com",
    "birthDate": "1998-05-19",
    "basicSalary": 7480552,
    "position": "Senior Software Engineer",
    "group": "Finance",
    "profileImage": "https://robohash.org/quiadoloriusto.png?size=100x100&set=set1",
    "description": "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.",
    "status": "inactive"
  }, {
    "id": 95,
    "username": "maspinwall2m",
    "firstName": "Merci",
    "lastName": "Aspinwall",
    "email": "maspinwall2m@i2i.jp",
    "birthDate": "1996-11-15",
    "basicSalary": 6041161,
    "position": "Software Engineer",
    "group": "Operations",
    "profileImage": "https://robohash.org/nobisenimquia.png?size=100x100&set=set1",
    "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    "status": "on-leave"
  }, {
    "id": 96,
    "username": "bdugo2n",
    "firstName": "Bobbette",
    "lastName": "D'Ugo",
    "email": "bdugo2n@reddit.com",
    "birthDate": "2003-06-26",
    "basicSalary": 7861659,
    "position": "Software Engineer",
    "group": "Design",
    "profileImage": "https://robohash.org/doloribusaccusamusest.png?size=100x100&set=set1",
    "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
    "status": "on-leave"
  }, {
    "id": 97,
    "username": "mkensit2o",
    "firstName": "Minette",
    "lastName": "Kensit",
    "email": "mkensit2o@walmart.com",
    "birthDate": "1994-02-25",
    "basicSalary": 7778164,
    "position": "UI Designer",
    "group": "Marketing",
    "profileImage": "https://robohash.org/similiquepraesentiumquos.png?size=100x100&set=set1",
    "description": "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    "status": "on-leave"
  }, {
    "id": 98,
    "username": "hcrummy2p",
    "firstName": "Hilliary",
    "lastName": "Crummy",
    "email": "hcrummy2p@smugmug.com",
    "birthDate": "1994-08-17",
    "basicSalary": 8765425,
    "position": "Financial Analyst",
    "group": "Marketing",
    "profileImage": "https://robohash.org/illoexrem.png?size=100x100&set=set1",
    "description": "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    "status": "inactive"
  }, {
    "id": 99,
    "username": "mpellew2q",
    "firstName": "Matthieu",
    "lastName": "Pellew",
    "email": "mpellew2q@apache.org",
    "birthDate": "2002-06-22",
    "basicSalary": 5580329,
    "position": "Operations Manager",
    "group": "Design",
    "profileImage": "https://robohash.org/ipsaquaeratlibero.png?size=100x100&set=set1",
    "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    "status": "inactive"
  }, {
    "id": 100,
    "username": "ehaliburton2r",
    "firstName": "Evelin",
    "lastName": "Haliburton",
    "email": "ehaliburton2r@xrea.com",
    "birthDate": "1997-01-10",
    "basicSalary": 6887800,
    "position": "UX Designer",
    "group": "Marketing",
    "profileImage": "https://robohash.org/eadistinctiodoloribus.png?size=100x100&set=set1",
    "description": "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
    "status": "active"
  }]

  //mock group
  private mockGroups: Group[] = [
    { id: 1, name: 'Engineering' },
    { id: 2, name: 'Product' },
    { id: 3, name: 'Design' },
    { id: 4, name: 'Marketing' },
    { id: 5, name: 'Human Resources' },
    { id: 6, name: 'Finance' },
    { id: 7, name: 'Operations' }
  ];

  // mock position
  public mockPositions: Position[] = [
    { id: 1, title: 'Software Engineer', group: 1 },
    { id: 2, title: 'Senior Software Engineer', group: 1 },
    { id: 3, title: 'Product Manager', group: 2 },
    { id: 4, title: 'UX Designer', group: 3 },
    { id: 5, title: 'UI Designer', group: 3 },
    { id: 6, title: 'Marketing Specialist', group: 4 },
    { id: 7, title: 'HR Manager', group: 5 },
    { id: 8, title: 'Financial Analyst', group: 6 },
    { id: 9, title: 'Operations Manager', group: 7 }
  ];

  constructor() {
    this.employeesSignal.set(this.mockEmployees);
    this.groupsSignal.set(this.mockGroups);
    this.positionsSignal.set(this.mockPositions);
  }

  get employees() {
    return this.employeesSignal();
  }

  get groups() {
    return this.groupsSignal();
  }

  get positions() {
    return this.positionsSignal();
  }

  getEmployeeById(id: number): Employee | undefined {
    return this.employees.find(employee => employee.id === id);
  }

  addEmployee(employee: Omit<Employee, 'id'>): Employee {
    const newEmployee = {
      ...employee,
      id: this.getNextId()
    };

    this.employeesSignal.update(employees => [...employees, newEmployee]);

    return newEmployee;
  }

  updateEmployee(updatedEmployee: Employee): Employee {
    this.employeesSignal.update(employees =>
      employees.map(employee =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee
      )
    );

    return updatedEmployee;
  }

  deleteEmployee(id: number): void {
    this.employeesSignal.update(employees =>
      employees.filter(employee => employee.id !== id)
    );
  }

  private getNextId(): number {
    const maxId = Math.max(...this.employees.map(employee => employee.id), 0);
    return maxId + 1;
  }

  getPositionsByGroup(groupName: string): Position[] {
    const group = this.groups.find(d => d.name === groupName);
    if (!group) return [];

    return this.positions.filter(position => position.group === group.id);
  }
}
