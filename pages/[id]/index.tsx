import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import * as _Builtin from "../../devlink/_Builtin";
import * as _utils from "../../devlink/utils";
import _styles from "../../devlink/Dynamic.module.css";
import projects from "../data/image.json"; // Assuming your data is here

interface Project {
  id: number;
  name: string;
  images: string[];
}

interface Props {
  item: Project;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async (context) => {
  const { id } = context.params!;
  const numericId = parseInt(id, 10); // Convert the id from string to number
  const item = projects.find((project) => project.id === numericId);

  if (!item) {
    return {
      notFound: true,
    };
  }

  return {
    props: { item },
  };
};

const Dynamic: React.FC<Props> = ({ item }) => {
  return (
    <>
    <_Builtin.HtmlEmbed value="%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22en%22%20%3E%0A%3Chead%3E%0A%20%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%20%3Ctitle%3ECodePen%20-%20Stars%20%23Codevember_08%3C%2Ftitle%3E%0A%20%20%3Cstyle%3E%0A%20%20html%20%7B%0A%20%20height%3A%20100%25%3B%0A%7D%0Ahtml%20body%20%7B%0A%20%20width%3A%20100%25%3B%0A%20%20height%3A%20100%25%3B%0A%20%20margin%3A%200%3B%0A%7D%0A%0A.container%20%7B%0A%20%20display%3A%20block%3B%0A%20%20position%3A%20relative%3B%0A%20%20width%3A%20100%25%3B%0A%20%20height%3A%20100%25%3B%0A%20%20background%3A%20black%3B%0A%7D%0A.container%20.text%20%7B%0A%20%20color%3A%20%23FFF%3B%0A%20%20position%3A%20absolute%3B%0A%20%20top%3A%2050%25%3B%0A%20%20right%3A%2050%25%3B%0A%20%20margin%3A%20-10px%20-75px%200%200%3B%0A%20%20font-size%3A%2020px%3B%0A%20%20font-family%3A%20sans-serif%3B%0A%20%20font-weight%3A%20bold%3B%0A%7D%0A%0A.stars%20%7B%0A%20%20z-index%3A%2010%3B%0A%20%20width%3A%201px%3B%0A%20%20height%3A%201px%3B%0A%20%20border-radius%3A%2050%25%3B%0A%20%20background%3A%20transparent%3B%0A%20%20box-shadow%3A%20718px%201689px%20%23FFF%20%2C%201405px%202127px%20%23FFF%20%2C%201270px%201148px%20%23FFF%20%2C%20620px%20641px%20%23FFF%20%2C%201538px%20708px%20%23FFF%20%2C%202169px%201632px%20%23FFF%20%2C%20523px%201494px%20%23FFF%20%2C%201081px%202018px%20%23FFF%20%2C%201372px%20585px%20%23FFF%20%2C%20974px%20576px%20%23FFF%20%2C%20448px%201231px%20%23FFF%20%2C%2078px%202055px%20%23FFF%20%2C%201180px%201274px%20%23FFF%20%2C%201752px%202099px%20%23FFF%20%2C%201392px%20488px%20%23FFF%20%2C%201836px%202303px%20%23FFF%20%2C%201309px%20816px%20%23FFF%20%2C%20922px%20962px%20%23FFF%20%2C%201165px%202485px%20%23FFF%20%2C%202054px%20176px%20%23FFF%20%2C%201425px%20747px%20%23FFF%20%2C%202253px%202056px%20%23FFF%20%2C%201602px%20114px%20%23FFF%20%2C%20433px%201332px%20%23FFF%20%2C%2065px%201726px%20%23FFF%20%2C%20257px%20334px%20%23FFF%20%2C%201512px%201855px%20%23FFF%20%2C%20775px%202422px%20%23FFF%20%2C%202512px%202123px%20%23FFF%20%2C%2076px%202235px%20%23FFF%20%2C%201979px%20501px%20%23FFF%20%2C%20352px%201222px%20%23FFF%20%2C%20554px%201215px%20%23FFF%20%2C%201200px%202163px%20%23FFF%20%2C%202078px%201983px%20%23FFF%20%2C%202461px%20557px%20%23FFF%20%2C%201960px%202055px%20%23FFF%20%2C%201966px%20316px%20%23FFF%20%2C%201123px%201402px%20%23FFF%20%2C%201461px%202288px%20%23FFF%20%2C%201625px%202076px%20%23FFF%20%2C%20822px%20609px%20%23FFF%20%2C%20531px%201358px%20%23FFF%20%2C%20900px%201938px%20%23FFF%20%2C%201867px%201362px%20%23FFF%20%2C%201049px%20372px%20%23FFF%20%2C%20319px%20980px%20%23FFF%20%2C%202321px%202421px%20%23FFF%20%2C%201701px%201425px%20%23FFF%20%2C%201827px%201324px%20%23FFF%20%2C%20126px%201121px%20%23FFF%20%2C%20527px%201735px%20%23FFF%3B%0A%20%20animation%3A%20animStar%20100s%20linear%20infinite%3B%0A%7D%0A.stars%3Aafter%20%7B%0A%20%20content%3A%20%22%20%22%3B%0A%20%20top%3A%20-600px%3B%0A%20%20width%3A%201px%3B%0A%20%20height%3A%201px%3B%0A%20%20border-radius%3A%2050%25%3B%0A%20%20position%3A%20absolute%3B%0A%20%20backgroud%3A%20transparent%3B%0A%20%20box-shadow%3A%201229px%201419px%20%23FFF%20%2C%20672px%202257px%20%23FFF%20%2C%20821px%20854px%20%23FFF%20%2C%20731px%201239px%20%23FFF%20%2C%201244px%2058px%20%23FFF%20%2C%20687px%202428px%20%23FFF%20%2C%20173px%201549px%20%23FFF%20%2C%201973px%20940px%20%23FFF%20%2C%202334px%201057px%20%23FFF%20%2C%20792px%20882px%20%23FFF%20%2C%201499px%201912px%20%23FFF%20%2C%201892px%209px%20%23FFF%20%2C%20172px%201753px%20%23FFF%20%2C%2022px%201577px%20%23FFF%20%2C%20934px%202059px%20%23FFF%20%2C%201398px%202309px%20%23FFF%20%2C%20100px%2077px%20%23FFF%20%2C%201545px%2022px%20%23FFF%20%2C%20595px%201917px%20%23FFF%20%2C%20941px%201452px%20%23FFF%20%2C%201226px%201022px%20%23FFF%20%2C%201254px%20990px%20%23FFF%20%2C%202507px%20352px%20%23FFF%20%2C%20111px%20887px%20%23FFF%20%2C%201666px%20168px%20%23FFF%20%2C%20966px%20986px%20%23FFF%20%2C%20121px%202559px%20%23FFF%20%2C%201424px%20792px%20%23FFF%20%2C%201973px%202544px%20%23FFF%20%2C%20577px%20503px%20%23FFF%20%2C%201167px%201107px%20%23FFF%20%2C%202397px%201653px%20%23FFF%20%2C%201054px%20810px%20%23FFF%20%2C%20663px%20805px%20%23FFF%20%2C%201084px%20317px%20%23FFF%20%2C%202214px%20759px%20%23FFF%20%2C%20190px%20975px%20%23FFF%20%2C%202218px%202104px%20%23FFF%20%2C%202013px%201227px%20%23FFF%20%2C%20383px%201778px%20%23FFF%20%2C%201287px%201660px%20%23FFF%20%2C%202131px%20994px%20%23FFF%20%2C%201073px%20748px%20%23FFF%20%2C%201745px%202372px%20%23FFF%20%2C%201424px%20252px%20%23FFF%20%2C%201274px%202457px%20%23FFF%20%2C%201976px%202422px%20%23FFF%20%2C%201644px%201665px%20%23FFF%20%2C%202372px%201772px%20%23FFF%20%2C%201593px%20580px%20%23FFF%20%2C%20894px%202361px%20%23FFF%20%2C%2031px%201802px%20%23FFF%20%2C%201552px%201134px%20%23FFF%20%2C%201477px%201847px%20%23FFF%20%2C%201647px%202464px%20%23FFF%20%2C%20599px%20510px%20%23FFF%20%2C%202016px%20226px%20%23FFF%20%2C%201402px%20243px%20%23FFF%20%2C%20748px%20953px%20%23FFF%20%2C%20387px%201212px%20%23FFF%20%2C%20453px%201525px%20%23FFF%20%2C%201032px%2093px%20%23FFF%20%2C%201420px%201399px%20%23FFF%20%2C%20146px%20948px%20%23FFF%20%2C%202256px%201631px%20%23FFF%20%2C%201405px%20394px%20%23FFF%20%2C%20201px%202149px%20%23FFF%20%2C%201077px%201765px%20%23FFF%20%2C%2034px%202213px%20%23FFF%20%2C%202388px%20246px%20%23FFF%20%2C%20392px%20667px%20%23FFF%20%2C%201595px%20181px%20%23FFF%20%2C%20323px%20426px%20%23FFF%20%2C%202405px%202410px%20%23FFF%20%2C%202484px%20280px%20%23FFF%3B%0A%7D%0A%0A.stars1%20%7B%0A%20%20z-index%3A%2010%3B%0A%20%20width%3A%202px%3B%0A%20%20height%3A%202px%3B%0A%20%20border-radius%3A%2050%25%3B%0A%20%20background%3A%20transparent%3B%0A%20%20box-shadow%3A%20452px%202369px%20%23FFF%20%2C%202030px%202013px%20%23FFF%20%2C%20113px%201775px%20%23FFF%20%2C%20426px%202228px%20%23FFF%20%2C%20735px%202395px%20%23FFF%20%2C%20483px%20147px%20%23FFF%20%2C%201123px%201666px%20%23FFF%20%2C%201944px%20113px%20%23FFF%20%2C%201096px%20372px%20%23FFF%20%2C%202005px%20118px%20%23FFF%20%2C%201948px%202320px%20%23FFF%20%2C%202095px%20823px%20%23FFF%20%2C%20742px%201559px%20%23FFF%20%2C%201637px%20383px%20%23FFF%20%2C%20877px%20992px%20%23FFF%20%2C%20141px%201522px%20%23FFF%20%2C%20483px%20941px%20%23FFF%20%2C%202028px%20761px%20%23FFF%20%2C%201164px%202482px%20%23FFF%20%2C%20692px%201202px%20%23FFF%20%2C%201008px%2062px%20%23FFF%20%2C%201820px%202535px%20%23FFF%20%2C%201459px%202067px%20%23FFF%20%2C%20519px%201297px%20%23FFF%20%2C%201620px%20252px%20%23FFF%20%2C%201014px%201855px%20%23FFF%20%2C%20679px%20135px%20%23FFF%20%2C%201927px%202544px%20%23FFF%20%2C%20836px%201433px%20%23FFF%20%2C%20286px%2021px%20%23FFF%20%2C%201131px%20769px%20%23FFF%20%2C%201717px%201031px%20%23FFF%20%2C%202121px%20517px%20%23FFF%20%2C%201865px%201257px%20%23FFF%20%2C%201640px%201712px%20%23FFF%20%2C%20158px%20162px%20%23FFF%20%2C%202491px%201514px%20%23FFF%20%2C%20784px%201446px%20%23FFF%20%2C%201547px%20968px%20%23FFF%20%2C%201966px%201461px%20%23FFF%20%2C%20923px%201883px%20%23FFF%20%2C%20601px%2081px%20%23FFF%20%2C%201486px%20598px%20%23FFF%20%2C%201947px%201462px%20%23FFF%20%2C%202161px%201181px%20%23FFF%20%2C%20773px%20675px%20%23FFF%20%2C%202023px%20455px%20%23FFF%20%2C%201199px%201199px%20%23FFF%20%2C%2094px%201814px%20%23FFF%20%2C%201055px%20852px%20%23FFF%20%2C%20583px%20631px%20%23FFF%20%2C%20150px%201931px%20%23FFF%20%2C%201472px%20597px%20%23FFF%20%2C%20611px%201338px%20%23FFF%20%2C%2054px%20859px%20%23FFF%20%2C%201266px%201019px%20%23FFF%20%2C%201028px%20256px%20%23FFF%20%2C%201442px%20964px%20%23FFF%20%2C%20436px%201325px%20%23FFF%20%2C%202446px%201141px%20%23FFF%20%2C%20723px%2070px%20%23FFF%20%2C%20825px%20964px%20%23FFF%20%2C%2063px%20271px%20%23FFF%20%2C%20647px%20849px%20%23FFF%20%2C%20309px%20673px%20%23FFF%20%2C%201965px%202090px%20%23FFF%20%2C%201672px%209px%20%23FFF%20%2C%20450px%202504px%20%23FFF%20%2C%201675px%202135px%20%23FFF%20%2C%202075px%20921px%20%23FFF%20%2C%201607px%202348px%20%23FFF%20%2C%202243px%201494px%20%23FFF%3B%0A%20%20animation%3A%20animStar%20125s%20linear%20infinite%3B%0A%7D%0A.stars1%3Aafter%20%7B%0A%20%20content%3A%20%22%20%22%3B%0A%20%20top%3A%20-600px%3B%0A%20%20width%3A%202px%3B%0A%20%20height%3A%202px%3B%0A%20%20border-radius%3A%2050%25%3B%0A%20%20position%3A%20absolute%3B%0A%20%20backgroud%3A%20transparent%3B%0A%20%20box-shadow%3A%20435px%201410px%20%23FFF%20%2C%201717px%202554px%20%23FFF%20%2C%20885px%201458px%20%23FFF%20%2C%201614px%20909px%20%23FFF%20%2C%2026px%202169px%20%23FFF%20%2C%201627px%201343px%20%23FFF%20%2C%20511px%20518px%20%23FFF%20%2C%201388px%20722px%20%23FFF%20%2C%20748px%201982px%20%23FFF%20%2C%20837px%202188px%20%23FFF%20%2C%20891px%201897px%20%23FFF%20%2C%20917px%202547px%20%23FFF%20%2C%20866px%202021px%20%23FFF%20%2C%201748px%202464px%20%23FFF%20%2C%20409px%202476px%20%23FFF%20%2C%201321px%201824px%20%23FFF%20%2C%201946px%201620px%20%23FFF%20%2C%2084px%201996px%20%23FFF%20%2C%20773px%20475px%20%23FFF%20%2C%202327px%201356px%20%23FFF%20%2C%20181px%2038px%20%23FFF%20%2C%202122px%201291px%20%23FFF%20%2C%202254px%20375px%20%23FFF%20%2C%20654px%20432px%20%23FFF%20%2C%202022px%20710px%20%23FFF%20%2C%20866px%201651px%20%23FFF%20%2C%20948px%202128px%20%23FFF%20%2C%201107px%201282px%20%23FFF%20%2C%201605px%201555px%20%23FFF%20%2C%20847px%202056px%20%23FFF%20%2C%201678px%20385px%20%23FFF%20%2C%201723px%202282px%20%23FFF%20%2C%20516px%20166px%20%23FFF%20%2C%201764px%2093px%20%23FFF%20%2C%201947px%202302px%20%23FFF%20%2C%201357px%201486px%20%23FFF%20%2C%201237px%202532px%20%23FFF%20%2C%202338px%202002px%20%23FFF%20%2C%20251px%201525px%20%23FFF%20%2C%20876px%201121px%20%23FFF%20%2C%20189px%20759px%20%23FFF%20%2C%201936px%201574px%20%23FFF%20%2C%202510px%201440px%20%23FFF%20%2C%20204px%20836px%20%23FFF%20%2C%202044px%20437px%20%23FFF%20%2C%20471px%2045px%20%23FFF%20%2C%20394px%20548px%20%23FFF%20%2C%201730px%20641px%20%23FFF%20%2C%201526px%201701px%20%23FFF%20%2C%201559px%201106px%20%23FFF%20%2C%201396px%201826px%20%23FFF%20%2C%201106px%20644px%20%23FFF%20%2C%20160px%202149px%20%23FFF%20%2C%201261px%201804px%20%23FFF%20%2C%20363px%20714px%20%23FFF%20%2C%202002px%202277px%20%23FFF%20%2C%20696px%201741px%20%23FFF%20%2C%202291px%20499px%20%23FFF%20%2C%202089px%202229px%20%23FFF%3B%0A%7D%0A%0A.stars2%20%7B%0A%20%20z-index%3A%2010%3B%0A%20%20width%3A%203px%3B%0A%20%20height%3A%203px%3B%0A%20%20border-radius%3A%2050%25%3B%0A%20%20background%3A%20transparent%3B%0A%20%20box-shadow%3A%20380px%201043px%20%23FFF%20%2C%2010px%201086px%20%23FFF%20%2C%20660px%201062px%20%23FFF%20%2C%201371px%20842px%20%23FFF%20%2C%201290px%202153px%20%23FFF%20%2C%202258px%20231px%20%23FFF%20%2C%202130px%202217px%20%23FFF%20%2C%201084px%20758px%20%23FFF%20%2C%201464px%201903px%20%23FFF%20%2C%20621px%202482px%20%23FFF%20%2C%202470px%20754px%20%23FFF%20%2C%201282px%201797px%20%23FFF%20%2C%20510px%201678px%20%23FFF%20%2C%20836px%20799px%20%23FFF%20%2C%202001px%20134px%20%23FFF%20%2C%202314px%201869px%20%23FFF%20%2C%201031px%20643px%20%23FFF%20%2C%20949px%20292px%20%23FFF%20%2C%2016px%202265px%20%23FFF%20%2C%20465px%201239px%20%23FFF%20%2C%202117px%201952px%20%23FFF%20%2C%201683px%20605px%20%23FFF%20%2C%201818px%201945px%20%23FFF%20%2C%20890px%201749px%20%23FFF%20%2C%20324px%20110px%20%23FFF%20%2C%201048px%201442px%20%23FFF%20%2C%202399px%201553px%20%23FFF%20%2C%20157px%20551px%20%23FFF%20%2C%20666px%20314px%20%23FFF%20%2C%20897px%20933px%20%23FFF%20%2C%202397px%20438px%20%23FFF%20%2C%201280px%20988px%20%23FFF%20%2C%201510px%202373px%20%23FFF%20%2C%202453px%201645px%20%23FFF%20%2C%20831px%20994px%20%23FFF%20%2C%202125px%20338px%20%23FFF%20%2C%201571px%202128px%20%23FFF%20%2C%201792px%2053px%20%23FFF%20%2C%20820px%202480px%20%23FFF%20%2C%20529px%201544px%20%23FFF%20%2C%201941px%20928px%20%23FFF%20%2C%201632px%20795px%20%23FFF%20%2C%20152px%20993px%20%23FFF%20%2C%201040px%20260px%20%23FFF%20%2C%201131px%20589px%20%23FFF%20%2C%202395px%201336px%20%23FFF%20%2C%201537px%201906px%20%23FFF%20%2C%201989px%201910px%20%23FFF%20%2C%201489px%201098px%20%23FFF%20%2C%20996px%201585px%20%23FFF%20%2C%20476px%2069px%20%23FFF%20%2C%20123px%20466px%20%23FFF%20%2C%20374px%20414px%20%23FFF%20%2C%20741px%201097px%20%23FFF%20%2C%201415px%201296px%20%23FFF%20%2C%20945px%201132px%20%23FFF%20%2C%20909px%202080px%20%23FFF%20%2C%202219px%208px%20%23FFF%20%2C%202198px%201039px%20%23FFF%20%2C%201794px%201513px%20%23FFF%20%2C%201484px%201972px%20%23FFF%20%2C%201557px%202099px%20%23FFF%20%2C%201385px%20912px%20%23FFF%20%2C%201612px%201474px%20%23FFF%20%2C%20169px%201963px%20%23FFF%3B%0A%20%20animation%3A%20animStar%20175s%20linear%20infinite%3B%0A%7D%0A.stars2%3Aafter%20%7B%0A%20%20content%3A%20%22%20%22%3B%0A%20%20top%3A%20-600px%3B%0A%20%20width%3A%203px%3B%0A%20%20height%3A%203px%3B%0A%20%20border-radius%3A%2050%25%3B%0A%20%20position%3A%20absolute%3B%0A%20%20backgroud%3A%20transparent%3B%0A%20%20box-shadow%3A%20148px%202112px%20%23FFF%20%2C%202328px%202246px%20%23FFF%20%2C%20793px%201150px%20%23FFF%20%2C%202476px%20867px%20%23FFF%20%2C%20195px%202295px%20%23FFF%20%2C%20721px%201158px%20%23FFF%20%2C%20344px%201096px%20%23FFF%20%2C%201434px%201247px%20%23FFF%20%2C%202251px%201334px%20%23FFF%20%2C%201696px%201404px%20%23FFF%20%2C%201928px%201929px%20%23FFF%20%2C%20473px%201718px%20%23FFF%20%2C%201176px%201364px%20%23FFF%20%2C%20133px%201990px%20%23FFF%20%2C%201396px%201179px%20%23FFF%20%2C%201355px%201046px%20%23FFF%20%2C%20676px%20869px%20%23FFF%20%2C%202255px%201676px%20%23FFF%20%2C%202393px%202105px%20%23FFF%20%2C%201032px%201390px%20%23FFF%20%2C%20773px%202159px%20%23FFF%20%2C%201235px%20945px%20%23FFF%20%2C%201161px%20209px%20%23FFF%20%2C%201878px%20175px%20%23FFF%20%2C%20287px%201787px%20%23FFF%20%2C%20509px%20935px%20%23FFF%20%2C%20473px%20442px%20%23FFF%20%2C%201864px%20177px%20%23FFF%20%2C%20768px%202004px%20%23FFF%20%2C%20513px%20744px%20%23FFF%20%2C%202060px%202271px%20%23FFF%20%2C%202187px%202135px%20%23FFF%20%2C%201818px%20505px%20%23FFF%20%2C%20809px%201998px%20%23FFF%20%2C%20323px%202553px%20%23FFF%20%2C%201420px%20167px%20%23FFF%20%2C%202418px%202233px%20%23FFF%20%2C%201955px%202053px%20%23FFF%20%2C%201822px%20145px%20%23FFF%20%2C%20931px%20629px%20%23FFF%20%2C%2094px%202440px%20%23FFF%20%2C%201816px%20718px%20%23FFF%20%2C%20386px%20668px%20%23FFF%20%2C%202040px%20397px%20%23FFF%20%2C%2040px%20866px%20%23FFF%20%2C%201397px%202398px%20%23FFF%20%2C%202399px%20297px%20%23FFF%20%2C%201611px%20259px%20%23FFF%20%2C%201393px%201139px%20%23FFF%3B%0A%7D%0A%0A.shooting-stars%20%7B%0A%20%20z-index%3A%2010%3B%0A%20%20width%3A%205px%3B%0A%20%20height%3A%2085px%3B%0A%20%20border-top-left-radius%3A%2050%25%3B%0A%20%20border-top-right-radius%3A%2050%25%3B%0A%20%20position%3A%20absolute%3B%0A%20%20bottom%3A%200%3B%0A%20%20right%3A%200%3B%0A%20%20background%3A%20linear-gradient(to%20top%2C%20rgba(255%2C%20255%2C%20255%2C%200)%2C%20white)%3B%0A%20%20animation%3A%20animShootingStar%2010s%20linear%20infinite%3B%0A%7D%0A%0A%40keyframes%20animStar%20%7B%0A%20%20from%20%7B%0A%20%20%20%20transform%3A%20translateY(0px)%3B%0A%20%20%7D%0A%20%20to%20%7B%0A%20%20%20%20transform%3A%20translateY(-2560px)%20translateX(-2560px)%3B%0A%20%20%7D%0A%7D%0A%40keyframes%20animShootingStar%20%7B%0A%20%20from%20%7B%0A%20%20%20%20transform%3A%20translateY(0px)%20translateX(0px)%20rotate(-45deg)%3B%0A%20%20%20%20opacity%3A%201%3B%0A%20%20%20%20height%3A%205px%3B%0A%20%20%7D%0A%20%20to%20%7B%0A%20%20%20%20transform%3A%20translateY(-2560px)%20translateX(-2560px)%20rotate(-45deg)%3B%0A%20%20%20%20opacity%3A%201%3B%0A%20%20%20%20height%3A%20800px%3B%0A%20%20%7D%0A%7D%0A%20%20%3C%2Fstyle%3E%0A%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%3C!--%20partial%3Aindex.partial.html%20--%3E%0A%3Cdiv%20class%3D%22container%22%3E%0A%20%20%3Cdiv%20class%3D%22sky%22%3E%0A%20%20%20%20%3Cdiv%20class%3D%22stars%22%3E%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%20class%3D%22stars1%22%3E%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%20class%3D%22stars2%22%3E%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%20class%3D%22shooting-stars%22%3E%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Fdiv%3E%0A%3C!--%20partial%20--%3E%0A%20%20%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E" />
      <_Builtin.Block className={_utils.cx(_styles, "header")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "headline")} tag="div">
          <_Builtin.Heading className={_utils.cx(_styles, "heading-5")} tag="h1">
            {item.name}
          </_Builtin.Heading>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "div-block-5",
            "mob",
            "tab-mob",
            "mob-width",
            "header"
          )}
          tag="div"
        >
          {item.images.map((image, index) => (
            <_Builtin.Image
              key={index}
              className={_utils.cx(_styles, "image-mob")}
              loading="lazy"
              width="500"
              height="500"
              src={image}
            />
          ))}
        </_Builtin.Block>
      </_Builtin.Block>
    </>
  );
};

export default Dynamic;
