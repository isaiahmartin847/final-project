"use client";

import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  MoveIn,
  MoveOut,
  Sticky,
} from "react-scroll-motion";
import InfoBlock from "./component/block";
import DonateBlock from "./component/donate";

const Page = () => {
  const FadeUp = batch(Fade(), MoveIn(0, 700), Sticky(), MoveOut(0, -800));

  const testText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nam molestiae! Distinctio dolore amet perspiciatis voluptatem perferendis rem, est maxime tenetur illo eaque possimus qui, nostrum quia error mollitia? Dicta culpa iste aspernatur vitae, unde sint eum asperiores explicabo, voluptatem animi iusto repellat nihil! Illum voluptas eius voluptates eligendi quos architecto sequi reprehenderit alias commodi voluptate nesciunt, aspernatur tempora, maiores, repudiandae ex soluta et in placeat qui ipsum amet magni neque rerum? Facere harum perferendis quam dignissimos! Maxime qui, et totam tempora, dolores numquam eum odio vel consectetur veniam deserunt perferendis id quos deleniti. Nihil est quod laboriosam amet ullam?`;

  return (
    <div>
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -500))}>
            <div className="">
              <InfoBlock
                text={testText}
                title="Opening statement"
              />
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={FadeUp}>
            <div className="">
              <InfoBlock
                text={testText}
                title="What is Pedophilic disorder? "
              />
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={FadeUp}>
            <div className="">
              <InfoBlock
                text={testText}
                title="What is child sexual abuse? "
              />
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={FadeUp}>
            <div className="">
              <InfoBlock
                text={testText}
                title="Key difference between pedophilic disorder and child sexual abuse? "
              />
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky())}>
            <DonateBlock />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
};

export default Page;
