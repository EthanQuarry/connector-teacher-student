
import { QuestionSections, Questions } from "@prisma/client";
import TextRecognition from "@/config/helpers/ocr";
import Image from "next/image";

interface ImageRenderProps extends Questions {
    questionSections: QuestionSections[]
}

export function ImageRender({ questions }: { questions: ImageRenderProps[] }) {
    
    return (
        <>
                    {questions.map((question, index) => {

                        if (question.questionSections.length === 0) return (<div key={index} >No question sections</div>)
                            
                            return (
                                
                            <div key={index} >
                                <h2>{question.fullName}</h2>
                             

                                <TextRecognition selectedImage={question.questionSections[0].imageUrl} />
                                
                                <div className="flex flex-col space-y-5">
                                {question.questionSections.map((section, sectionIndex) => (
                                <div key={sectionIndex}>
                                    <Image
                                        src={section.imageUrl}
                                        alt={`Question Section ${sectionIndex + 1}`}
                                        width={500}
                                        height={500}
                                        placeholder="blur"
                                        blurDataURL={section.imageUrl}
                                    />
                                </div>
                            ))}
                                </div>
                            </div>
                        )
                    })}
                    </>
    )
} 